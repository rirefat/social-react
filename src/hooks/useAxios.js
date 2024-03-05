import { useContext, useEffect } from "react";
import { api } from "../api";
import { AuthContext } from "../components/Contexts/AuthContext";

const useAxios = () => {
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        // add a request interceptor
        api.interceptors.request.use(
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
    }, [])
}

export default useAxios;