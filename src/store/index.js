import {configureStore} from "@reduxjs/toolkit";
import mealsSlice from "./slices/meals"
import offerSlice from "./slices/offer"
import homeSlice from "./slices/home"
import adminSlice from "./slices/admin"
import uiSlice from "./slices/ui"
import driverSlice from "./slices/driver"
import wsSlice from "./slices/ws"
import departmentSlice from "./slices/department"
const store =configureStore(
    {
        reducer:{
            meals:mealsSlice,
            offer:offerSlice,
            home:homeSlice,
            admin:adminSlice,
            department:departmentSlice,
            ui:uiSlice,
            ws:wsSlice,
            driver:driverSlice
        }
    }
);

export default store;