import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
    phone: number;
}

interface TableState {
    users: User[];
}

const initialState: TableState = {
    users: [],
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addTable: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        editTable: (state, action: PayloadAction<User>) => {
            const { id, name, email, phone } = action.payload;
            const editingData = state.users.find(data => data.id === id);
            if (editingData) {
                editingData.name = name;
                editingData.email = email;
                editingData.phone = phone;
            }
        },
        deleteTable: (state, action: PayloadAction<{ id: number }>) => { 
            const { id } = action.payload; 
            const index = state.users.findIndex(data => data.id === id);
            if (index !== -1) {
                state.users.splice(index, 1);
            }
        }
    },
});

export const { addTable, editTable, deleteTable } = tableSlice.actions;
export default tableSlice.reducer;

export type { TableState };
export interface RootState {
    table: TableState;
}
export type { User };