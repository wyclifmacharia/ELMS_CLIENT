import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utils/ApiDomain";


export type TUser = {
    empoyee_id: number
    first_name: string
    last_name: string
    email: string
    department_id: string
    hashed_pass: string
    role: string
    date_joined: Date;
}
// Employee creation

export const employeAPI = createApi({ // sets up API endpoints for user management - creating users and verifying them etc
    reducerPath: 'EmployeeAPI', //this is the key in the store where the API state will be stored - name of the API in the store
    baseQuery: fetchBaseQuery({
        baseUrl: ApiDomain
    }),
    tagTypes: ['Employees'],
    endpoints: (builder) => ({
        createEmployees: builder.mutation<{ message: string }, Partial<TUser>>({
            query: (newUser) => ({
                url: '/Employees',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['Employees'] // invalidates the cache for the Users tag when a new user is created
        }),
        verifyUser: builder.mutation<{ message: string }, { email: string, code: string }>({
            query: (data) => ({
                url: '/verify',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Employees']
        })


    })
})