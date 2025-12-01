import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ApiDomain } from "../../utils/ApiDomain";
import type { RootState } from "../../app/store";

export type TypeLeaveReq= {

    employee_id: number;
    leave_type_id: number;
    start_date: string;
    end_date: string;
    justification: Text;
}

export type TypeEmployeLeaveReq = {
    leaveReq: TypeLeaveReq[]
}

export const leaveRequestAPI = createApi({
    reducerPath: 'leaveRequestAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: ApiDomain,
        // Prepare header 
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).Employe.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            headers.set('Content-Type', 'application/json');
            return headers
        }
    }),
    tagTypes: ['LeaveReqs'],
    endpoints: (builder) => ({
        createLeaveReq: builder.mutation<TypeLeaveReq, Partial<TypeLeaveReq>>({
            query: (newTodo) => ({
                url: '/todos',
                method: 'POST',
                body: newTodo
            }),
            invalidatesTags: ['Todos']
        }),
        getTodos: builder.query<{ data: TypeTodo[] }, void>({ //void means no parameters are needed to fetch the todos
            query: () => '/todos',
            providesTags: ['Todos'] // this tells RTK Query that this endpoint provides the Todos tag, so it can be used to invalidate the cache when a new todo is created
        }),
        // delete todo
        deleteTodo: builder.mutation<{ success: boolean, id: number }, number>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos'] // invalidates the cache for the Todos tag when a todo is deleted
        }),
        updateTodo: builder.mutation<TypeTodo, Partial<TypeTodo> & { id: number }>({
            query: (updatedTodo) => ({
                url: `/todos/${updatedTodo.id}`,
                method: 'PUT',
                body: updatedTodo
            }),
            invalidatesTags: ['Todos']

        }),
        getTodosByUserId: builder.query<TypeUserTodo, number>({
            query: (userId) => `users/${userId}/todos`,
            providesTags: ['Todos'] // this tells RTK Query that this endpoint provides the Todos tag, so it can be used to invalidate the cache when a new todo is created
        })
    })
})