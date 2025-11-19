import Navbar from "../nav/Navbar"
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; //validator
import { loginAPI } from "../../feautures/auths/loginAPI";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../feautures/auths/employeSlice";
import { useNavigate } from "react-router";

type LoginInputs = {
    email: string;
    hashed_pass: string;
};

const schema = yup.object({
    email: yup.string().email('Invalid email').max(100, 'Max 100 characters').required('Email is required'),
    hashed_pass: yup.string().min(6, 'Min 6 characters').max(20, 'Max 20 characters').required('Password is required'),
});
export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginUser, { isLoading }] = loginAPI.useLoginUserMutation()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginInputs>({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<LoginInputs> = async(data) => {
        try {

            const response = await loginUser(data).unwrap()
             console.log(response);
            toast.success(response.message)
            // dispatch- store user info
            dispatch(loginSuccess(response))

            if (response.employee.role === 'admin') {
                navigate('/admin/dashboard/todos')
            } else if (response.employee.role === 'user') {
                navigate('/user/dashboard/todos')
            }


        }catch(error:any){
            console.error("Login error", error);
            toast.error(error?.data?.message || "Login failed")
        }
    }


    return (
        <>
            <Navbar />


            <div className="flex justify-center items-center min-h-screen bg-base-200 ">
                <div className="w-full max-w-lg p-8 rounded-xl shadow-lg bg-white">
                    <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Email"
                            className="input border border-gray-300 rounded w-full p-2 text-lg"

                        />
                        {errors.email && (
                            <span className="text-sm  text-red-700">{errors.email.message}</span>
                        )}

                        <input
                            type="password"
                            {...register("hashed_pass")}
                            placeholder="Password"
                            className="input border border-gray-300 rounded w-full p-2 text-lg"

                        />
                        {errors.hashed_pass && (
                            <span className="text-sm text-red-700">{errors.hashed_pass.message}</span>
                        )}


                       <button type="submit" className="btn btn-primary w-full mt-4" disabled={isLoading}>
                            {
                                isLoading ? (
                                    <>
                                        <span className="loading loading-spinner text-primary" /> Please wait...
                                    </>
                                ) : "Login"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
