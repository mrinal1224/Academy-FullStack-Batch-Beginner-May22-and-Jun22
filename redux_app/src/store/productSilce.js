import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const STATUSES = {
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'loading'
}


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.SUCCESS
    },

     // reducers : {
    //    setProducts(state , action){
    //       state.data = action.payload
    //    },

    //    setStatus(state , action){
    //     state.status = action.payload
    //    }
    // },



    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.pending , (state)=>{
           state.status = STATUSES.LOADING
        }).addCase(fetchProducts.fulfilled , (state , action)=>{
           state.data = action.payload
           state.status = STATUSES.SUCCESS
        }).addCase(fetchProducts.rejected, (state)=>{
           state.status = STATUSES.ERROR
        })
   }

})

export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer


// redux Thunks - 

// Thunks are genreally Functions only byt they take async functions inside them and they process the reducers related to those thunks.


export const fetchProducts = createAsyncThunk('products' , async ()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
})

// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch) {

//         dispatch(setStatus(STATUSES.LOADING))
//         try {

//             const res = await axios.get('https://fakestoreapi.com/products')
//             dispatch(setProducts(res.data))
//             dispatch(setStatus(STATUSES.SUCCESS))

//       } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }