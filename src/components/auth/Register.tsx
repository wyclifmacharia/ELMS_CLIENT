import Navbar from "../nav/Navbar";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { employeAPI } from "../../feautures/auth/employeAPI";
import { toast } from "sonner"

type RegisterInputs = {
  first_name: string;
  last_name: string;
  email: string;
  department_id: string; // keep as string for input
  role: string;
  date_joined: Date;
  hashed_pass: string;
  confirmPassword: string;
};

const schema = yup.object({
  first_name: yup.string().max(50, "Max 50 characters").required("First name is required"),
  last_name: yup.string().max(50, "Max 50 characters").required("Last name is required"),
  email: yup.string().email("Invalid email").max(100, "Max 100 characters").required("Email is required"),
  hashed_pass: yup.string().min(6, "Min 6 characters").max(255, "Max 255 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("hashed_pass")], "Passwords must match")
    .required("Confirm password is required"),
  role: yup.string().max(50, "Max 50 characters").required("Role is required"),
  date_joined: yup.date().max(new Date(), "Date cannot be in the future").required("Date joined is required"),
  department_id: yup.string().max(20, "Max 20 characters").required("Department ID is required"),
});

export const Register = () => {
 const navigate = useNavigate()
    const [createEmployee, { isLoading }] =employeAPI.useCreateEmployeesMutation()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterInputs>({
        resolver: yupResolver(schema)
    })


  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    // convert department_id to number
    const payload = { ...data, department_id: Number(data.department_id) };
    console.log(payload);
    try {
            const response = await createEmployee(data).unwrap()
            // console.log("Response", response);
            toast.success(response.message)

            // redirect the user to verify
            setTimeout(() => {
                navigate('/verify', {
                    state: {email: data.email}
                })
            }, 2000)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
             console.log("Error", error);
            toast.error(error.data.error)

        }

  };

  // reusable input component
  const InputField = ({ id, type = "text", placeholder }: { id: keyof RegisterInputs; type?: string; placeholder: string }) => (
    <div className="mb-3">
      <input
        type={type}
        {...register(id)}
        placeholder={placeholder}
        className={`input border border-gray-300 rounded w-full p-2 text-lg ${errors[id] ? "border-red-500" : ""}`}
      />
      {errors[id] && <span className="text-red-700 text-sm">{errors[id]?.message}</span>}
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="w-full max-w-lg p-8 rounded-xl shadow-lg bg-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Account Registration</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField id="first_name" placeholder="First Name" />
            <InputField id="last_name" placeholder="Last Name" />
            <InputField id="email" type="email" placeholder="Email" />
            <InputField id="department_id" placeholder="Department ID" />
            <InputField id="role" placeholder="Role" />
            <InputField id="date_joined" type="date" placeholder="Date Joined" />
            <InputField id="hashed_pass" type="password" placeholder="Password" />
            <InputField id="confirmPassword" type="password" placeholder="Confirm Password" />

           <button type="submit" className="btn btn-primary w-full mt-4" disabled={isLoading}>
             {isLoading ? (
             <>
              <span className="loading loading-spinner text-primary" />
                 Please Wait...
             </>
             ) : (
             "Register"
            )}
           </button>

          </form>
        </div>
      </div>
    </>
  );
};
