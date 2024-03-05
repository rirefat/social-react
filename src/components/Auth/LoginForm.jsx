import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

const LoginForm = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);  

    const submitForm = async (data) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, data);

            if (response.status === 200) {
                const { token, user } = response.data;

                if (token) {
                    const authToken = token.token;
                    const refreshToken = token.refreshToken;

                    console.log(`Login time auth token: ${authToken}`);
                    setAuth({ user, authToken, refreshToken });
                    navigate("/");
                }
            }

        } catch (error) {
            console.log(error);
            setError('root.random', {
                type: 'random',
                message: `User with email ${data.email} is not found`
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
            <InputField label={"Email"} error={errors.email}>
                <input
                    className={`auth-input ${errors.email && `border-red-500`}`}
                    {...register("email", { required: "Email Id is required" })}
                    type="email"
                    name="email"
                    id="email"
                />
            </InputField>
            <InputField label={"Password"} error={errors.password}>
                <input
                    className={`auth-input ${errors.email && `border-red-500`}`}
                    {...register("password", { required: "Need password to login" })}
                    type="password"
                    name="password"
                    id="password"
                />
            </InputField>
            <p className="my-4 text-red-400">{errors?.root?.random?.message}</p>
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >Login</button>
        </form>
    );
};

export default LoginForm;