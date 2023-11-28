const { createSlice } = require("@reduxjs/toolkit");

const offerSlice = createSlice({
    name: "offer",
    initialState:{
        data:{
            showoffer:false
        }
    },
    reducers: {
    }
})
export const offerAction = offerSlice.actions
export default offerSlice.reducer