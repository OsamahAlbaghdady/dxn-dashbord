import { department } from "../model/department";
const { createSlice } = require("@reduxjs/toolkit");
const departmentSlice = createSlice({
  name: "department",
  initialState: {
    data: {
      department,
      departments:null,
      isEdit:false,
    },
  },
  reducers: {
    newDepartment(state, action) {
      state.data = {
        ...state.data,
        departments: action.payload,
      };
    },
    edit(state,action){
      const {is,name,id} = action.payload
      state.data={
        ...state.data,
        isEdit:is,
        department:{
          ...state.data.department,
          name:name,
          id:id
        }
      }
    },
    add(state, action) {
      state.data = {
        ...state.data,
        departments: [action.payload, ...state.data.departments],
      };
    },
    remove(state, action) {
      state.data = {
        ...state.data,
        departments: state.data.departments.filter(
          (item) => item.id !== action.payload
        ),
      };
    },
    set(state,action){
      const {key,value} = action.payload
      state.data.department={
        ...state.data.department,
        [key]:value
      }
    }
  },
});
export const departmentAction = departmentSlice.actions;
export default departmentSlice.reducer;
