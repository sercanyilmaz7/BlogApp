import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  //? Hangi verilerin saklanamsı gerektiğini inceleyip belirleyip burada state olarak yazıyoruz.
  //? state lere "" atamıştık ama ılk render de "" yanı null değeri geldiği için hata verdi bu yüzden [] oalrak değiştirdik.
  initialState: {
    //? ilk başta değerileri null vermiştik bunu yerine hata olmasın diye şimdi  [] verdik.
    blogs: [],
    categories:[],
    details:[],
    myblogs:[],
    loading:null,
    error:null,

  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    //?aslında  payload ı acıp ıcınden data url alıyoruz.
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    getSuccessDetails: (state, { payload: { data } }) => {
      state.loading = false;
      state.details = data;
    },
    getSuccessMyblogs: (state, { payload: { data } }) => {
      state.loading = false;
      state.myblogs = data;
    },


    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, getProCatBrandSuccess,getSuccessDetails,getSuccessMyblogs } =
  blogSlice.actions;
export default blogSlice.reducer;
