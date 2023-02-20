import { createSlice } from "@reduxjs/toolkit"; 
import axios from 'axios'



export const filesSlice = createSlice({
    name: "files",
    initialState: {
        data: []
    },
    reducers: {
        setFiles: (state=[], action) => {
            state.data = action.payload;
        }
    }
})


export default filesSlice.reducer

export const {setFiles} = filesSlice.actions


export const getFiles = () => (dispatch) => {
    axios.get('http://127.0.0.1:3000/api/files/data').then((response) => {
        dispatch(setFiles(response.data))
    }).catch((err) => {
        console.log(err)
    })
}


export const update_state = (inputBuscar) => (dispatch) => {
    axios.get(`http://127.0.0.1:3000/api/files/data?fileName=${inputBuscar}`, {headers: { }
    })
    .then((response) => {
        dispatch(setFiles(response.data))
    }).catch((err) => {
        console.log(err)
    })
}