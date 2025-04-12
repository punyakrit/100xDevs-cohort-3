import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
export function useTodo(){
    const [data, setData] = useState({})

    async function getPosts(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        setData(res.data)
    }

    useEffect(()=>{
        getPosts()
    },[])

    return {data}
}

export function useFetch(url){
    console.log(url)
    const [finalData, setFinalData] = useState({})
    const [loading , setLoading] = useState(false)

    async function fetchRes(){
        setLoading(true)
        const res = await axios.get(url)
        setFinalData(res.data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchRes()
    },[url])


    useEffect(()=>{
        const inter = setInterval(()=>{
            fetchRes()
        },5000)
    },[])

    return {finalData, loading}
}