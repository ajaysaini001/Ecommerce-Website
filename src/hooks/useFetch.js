import { fetchDataFromApi } from "../utils/api";

import React, { useEffect, useState } from 'react'

const useFetch = (endpoint) => {
    const [data,setDate]=useState();
    useEffect(  ()=>{
        makeUpiCall();
    },[endpoint]);
 
    const makeUpiCall=async () =>{
        const res=await fetchDataFromApi(endpoint);
        setDate(res);
    };
  return {data};
};

export default useFetch