import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import coinSlice from "../features/coin/coinSlice";

export default configureStore({
    reducer:{ 
        counter:counterSlice,
        coin:coinSlice,
    }
})
