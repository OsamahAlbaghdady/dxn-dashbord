import { admin, admins } from "../model/admin";
const { createSlice } = require("@reduxjs/toolkit");
const driverSlice = createSlice({
  name: "driver",
  initialState: {
    data: {
      admins,
      editData: admin,
      isEdit: false,
    },
  },
  reducers: {
    editDriver(state, action) {
      const { name, image, email, specialty, id, type, phone } =
        action.payload;
      state.data = {
        ...state.data,
        editData: { name, image, email, specialty, id, type, phone },
        isEdit: true,
      };
    },
    set(state, action) {
      const { key, value } = action.payload;
      state.data = {
        ...state.data,
        editData: {
          ...state.data.editData,
          [key]: value,
        },
      };
    },
    remove(state, action) {
      state.data.admins = [
        ...state.data.admins.filter((item) => item.id !== action.payload),
      ];
    },
    addDriver(state,action){
        state.data.admins=[
            action.payload,...state.data.admins
        ]
    },
    setDrivers(state,action){
        state.data.admins=action.payload
    }
  },
});
export const driverAction = driverSlice.actions;
export default driverSlice.reducer;
