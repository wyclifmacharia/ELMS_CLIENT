import { createSlice } from "@reduxjs/toolkit";

//either a user is logged in or logout
export type EmployeState = {
    token: string | null;
    Employe: {
        employee_id: number;
        first_name: string;
        last_name: string;
        hashed_pass: string;
        email: string;
        department_id: string;
        role: string;
    } | null;
}

//no user in the system
const initialState: EmployeState = {
    token: null,
    Employe: null
}

const employeSlice = createSlice({ // createSlice is a function that creates a slice of the Redux store- a slice in simple terms is a part of the store that contains a specific piece of state and the reducers that update that state.
    name: 'Employee',
    initialState,
    reducers: { //a reducer is a function that takes the current state and an action, and returns a new state
        loginSuccess: (state, action) => {
            state.token = action.payload.token; // the token is set when the user logs in successfully
            state.Employe = action.payload.employee // the user is set when the user logs in successfully
        },
        logOut: (state) => {
            state.token = null;
            state.Employe = null;
        }
    }
})


export const { loginSuccess, logOut } = employeSlice.actions
export default employeSlice.reducer