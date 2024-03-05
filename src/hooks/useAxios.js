import { useContext, useEffect } from "react";
import { api } from "../api";
import { AuthContext } from "../components/Contexts/AuthContext";
import axios from "axios";

const useAxios = () => {
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        // add a request interceptor
        const requestIntercept = api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;

                if (authToken) {
                    config.headers.Authorization = `bearer ${authToken}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );

        // add a response interceptor
        const responseIntercept = api.interceptors.response.use(
            (response) => response,

            async (error) => {
                const originalRequest = error.config;

                if (error.response.status === 401 && !originalRequest.retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`, { refreshToken });

                        const { token } = response.data;
                        console.log(`New token: ${token}`);
                        setAuth({ ...auth, authToken: token })

                        originalRequest.headers.Authorization = `bearer ${token}`;

                        return axios(originalRequest);
                    } catch (error) {
                        console.log(error);
                        throw error;
                    }
                }

                return Promise.reject(error);
            }
        );

        // cleanup 
        return () => {
            api.interceptors.request.eject(requestIntercept);
            api.interceptors.response.eject(responseIntercept);
        }
    }, [auth.authToken])

    return { api }
}

export default useAxios;