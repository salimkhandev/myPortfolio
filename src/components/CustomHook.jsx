import { useEffect, useState } from "react";
export const  CustomHook=()=>{
    const [value, setValue]=useState([])
    const fetchData=async()=>{
        const response =await fetch('https://jsonplaceholder.typicode.com/posts')
        const data =await response.json()
        setValue(data)
        console.log(data)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    return value;

}
