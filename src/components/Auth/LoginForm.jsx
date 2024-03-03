import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitForm = (data) => {
        console.log(data)
        navigate("/");
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

            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >Login</button>
        </form>
    );
};

export default LoginForm;