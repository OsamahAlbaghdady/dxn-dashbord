const { createSlice } = require("@reduxjs/toolkit");
const uiSlice = createSlice({
    name: "ui",
    initialState:{
        data:{
            alert:{
                show:false,
                body:"",
                actionName:"",
                action:null,
                isLoading:false
            },
            snackBar:{
                show: false ,
                body : "",
                status:false
            },
            loading:true
        }
    },
    reducers: {
        showAlert(state,action){
            const {} = action.payload
            state.data.alert={
                ...action.payload,
                show:true
            }
        },
        closeAlert(state){
            state.data={
                ...state.data,
            alert:{
                show:false,
                body:"",
                actionName:"",
                action:null,
                isLoading:false
            }}
        },
        done(state){
            state.data={
                ...state.data,
                alert:{
                    ...state.data.alert,
                    isLoading:!state.data.alert.isLoading
                }
            }
        },
        onSnack(state,action){
            const {body,status} = action.payload
            state.data={
                ...state.data,
                snackBar:{show:true,
                body,
                status}
            }
        },
        close(state){
            state.data={
                ...state.data,
                snackBar:{
                    ...state.data.snackBar,
                    show:false
                }
            }
        },
        startLoading(state){
            state.data={
                ...state.data,
                loading:true
            }
        },
        closeLoading(state){
            state.data={
                ...state.data,
                loading:false
            }
        }

        
    }
})
export const uiAction = uiSlice.actions
export default uiSlice.reducer