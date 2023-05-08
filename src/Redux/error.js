import { createSlice } from "@reduxjs/toolkit";

export const errorsReducer = createSlice({
    name: "errors",
    initialState:{
        errors: ["I am hungry", "static wrong password"]
    },
    reducers:{
        _setErrors:(state, action)=>{
            let newErrors = state.errors;
            newErrors.push(action.payload);
            state.errors = newErrors;
            // console.log('user was set');
            // if(action.payload == "Guest"){
            //     state.signStatus = "Signin";
            // }else{
            //     state.signStatus = "Signout";
            // }
        },
        _clearErrors:(state)=>{
            state.errors = [];
        }
    }
});

export const {_setErrors,_clearErrors} = errorsReducer.actions;

export default errorsReducer.reducer;