import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

    const formSubmit = (data) => {
        console.log(data);
        setAuth({auth})
        navigate('/login')
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]">
            <InputField label={"name"} error={errors.name}>
                <input
                    className="auth-input"
                    {...register("name", { required: "Your name is required" },)}
                    type="text"
                    name="name"
                    id="name"
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
                    {...register("password", { required: "Your password is required", minLength:8 })}
                    type="text"
                    name="password"
                    id="password"
                />
            </InputField>
            <InputField label={"confirm password"} error={errors.confirm_password}>
                <input
                    className="auth-input"
                    {...register("confirm_password", { required: "Confirm your password", minLength:8 })}
                    type="text"
                    name="confirm_password"
                    id="confirm_password"
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