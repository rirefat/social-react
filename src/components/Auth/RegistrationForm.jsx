import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const formSubmit = async (formData) => {
        try {
            let response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`, formData);

            if (response.status === 201) {
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            setError("root.random", {
                type: "random",
                message: `Something went wrong: ${error.message}`,
            });
        }
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]">
            <InputField label={"First Name"} error={errors.firstName}>
                <input
                    className="auth-input"
                    {...register("firstName", { required: "Your first name is required" },)}
                    type="text"
                    name="firstName"
                    id="firstName"
                />
            </InputField>
            <InputField label={"Last Name"} error={errors.lastName}>
                <input
                    className="auth-input"
                    {...register("lastName", { required: "Your last name is required" },)}
                    type="text"
                    name="lastName"
                    id="lastName"
                />
            </InputField>
            <InputField label={"email"} error={errors.email}>
                <input
                    className="auth-input"
                    {...register("email", { required: "Your email is required" },)}
                    type="text"
                    name="email"
                    id="email"
                />
            </InputField>
            <InputField label={"password"} error={errors.password}>
                <input
                    className="auth-input"
                    {...register("password", { required: "Your password is required", minLength: 8 })}
                    type="text"
                    name="password"
                    id="password"
                />
            </InputField>

            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >
                Register
            </button>
        </form>

    );
};

export default RegistrationForm;


{/* 
<form className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]">

    <div className="form-control">
        <label className="auth-label" htmlFor="name">Name</label>
        <input className="auth-input" name="name" type="text" id="name" />
    </div>

    <div className="form-control">
        <label className="auth-label" htmlFor="email">Email</label>
        <input
            className="auth-input"
            name="email"
            type="email"
            id="email"
        />
    </div>

    <div className="form-control">
        <label className="auth-label" htmlFor="email">Password</label>
        <input
            className="auth-input"
            name="password"
            type="password"
            id="password"
        />
    </div>

    <div className="form-control">
        <label className="auth-label" htmlFor="confirmPassword"
        >Retype Password</label
        >
        <input
            className="auth-input"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
        />
    </div>

    <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
    >
        Register
    </button>
</form> 
*/}