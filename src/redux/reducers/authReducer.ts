import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    token: string | null;
};

const initialState: AuthState = {
    token: null,
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
