import React from 'react'
import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart,fetchFail,getSuccess,getSuccessDetails, getSuccessMyblogs } from '../features/blogSlice';
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCalls = () => {
  const { id:userId } = useSelector((state) => state.auth);

  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  //!------------- GET CALLS ----------------
  const getCategorisData = async (url) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!!!!!!!!!!!!!!!!

  const getBlogsData = async (url) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!!!!!!!!!!!!!!!!
  const getDetailsData = async (url, id) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);
      console.log(data);
      dispatch(getSuccessDetails({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!!!!!!!!!!!!!!!!
  const getMyBlogsData = async (url, id) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosWithToken.get(`api/${url}/?author=${id}`);
      //  console.log(data);
      dispatch(getSuccessMyblogs({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!------------- POST CALLS ----------------

  const postBlogsData = async (url, info) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //  await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.post(`api/${url}/`, info);
      // toastSuccessNotify(`${url} successfuly added`);
      //? yeni veri eklendikten sonra veriyi tekrar get ederek datayı güncelliyoruz.
      getBlogsData(url);
    } catch (error) {
      console.log(error);
      // toastErrorNotify(`${url} can not be added`);
      // dispatch(fetchFail());
    }
  };

  //!!!!!!!!!!!!!!!!

  const postBlogsLike = async (url, id) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //  await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.post(`api/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly added`);
      //? yeni veri eklendikten sonra veriyi tekrar get ederek datayı güncelliyoruz.
      // getBlogsData(url);
      getBlogsData("blogs");
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
      // dispatch(fetchFail());
    }
  };
  //!!!!!!!!!!!!!!!!
  const postCreateComments = async (url, id, comment) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //  await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.post(`api/${url}/${id}/`, comment);
      toastSuccessNotify(`${url} successfuly added`);
      //? yeni veri eklendikten sonra veriyi tekrar get ederek datayı güncelliyoruz.
      // getBlogsData(url);
      getDetailsData("blogs", id);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
      // dispatch(fetchFail());
    }
  };
  //!!!!!!!!!!!!!!!!

  //!------------- PUT CALLS ----------------
  const putBlogsData = async (url, info) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    //  dispatch(fetchStart());
    try {
      //  await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.put(`api/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      // dispatch(getSuccess({ url }));
      //? veri düzenlendikten sonra veriyi tekrar get ederek datayı güncelliyoruz.
      getDetailsData("blogs", info.id);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
      //  dispatch(fetchFail());
    }
  };

  //!------------- DELETE CALLS ----------------
  const deleteBlogsData = async (url, id) => {
    // const BASE_URL = "https://12176.fullstack.clarusway.com/";
    //  dispatch(fetchStart());
    try {
      //  await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.delete(`api/${url}/${id}`);
      toastSuccessNotify(`${url} successfuly deleted`);
      // dispatch(getSuccess({ url }));
      //? silindikten sonra veriyi tekrar get ederek datayı güncelliyoruz.
      getBlogsData(url);
      getMyBlogsData("blogs",userId)
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
      //  dispatch(fetchFail());
    }
  };

  return {
    getBlogsData,
    postBlogsData,
    putBlogsData,
    deleteBlogsData,
    getCategorisData,
    getDetailsData,
    getSuccessDetails,
    getMyBlogsData,
    postBlogsLike,
    postCreateComments,
  };
}

export default useBlogCalls;