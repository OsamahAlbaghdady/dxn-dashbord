import { admin, admins } from "../model/admin";
const { createSlice } = require("@reduxjs/toolkit");
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: {
      admins,
      editData: admin,
      isEdit: false,
    },
  },
  reducers: {
    editAdmin(state, action) {
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
    addAdmin(state,action){
        state.data.admins=[
            action.payload,...state.data.admins
        ]
    },
    setAdmins(state,action){
        state.data.admins=action.payload
    }
  },
});
export const adminAction = adminSlice.actions;
export default adminSlice.reducer;
