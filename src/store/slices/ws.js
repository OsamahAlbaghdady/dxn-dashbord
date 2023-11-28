const { createSlice } = require("@reduxjs/toolkit");
const wsSlice = createSlice({
    name: "ws",
    initialState:{
        ws:null
    },
    reducers: {
        setWs(state,action){
            state.ws=action.payload
        }
    }
})
export const wsAction = wsSlice.actions
export default wsSlice.reducer