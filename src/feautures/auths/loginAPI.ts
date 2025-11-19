import { ApiDomain } from "../../utils/ApiDomain";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//response on login
export type TLoginResponse = {
    message: string,
    token: string,
    employee: {
        employee_id: number,
        first_name: string,
        last_name: string,
        email: string,
        department_id: string,
        isActive: boolean,
        role: string
    }
}

// inputs to login
type LoginInputs = {
    email: string;
    hashed_pass: string;
}

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiDomain }),
    tagTypes: ['Login'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<TLoginResponse, LoginInputs>({
            query: (loginData) => ({
                url: '/loginEmployee',
                method: 'POST',
                body: loginData
            }),
            invalidatesTags: ['Login']
        })
    })
})

