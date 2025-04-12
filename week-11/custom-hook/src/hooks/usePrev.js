import { useEffect } from "react";
import { useRef } from "react";

export function usePrev(count){
    const ref = useRef()

    useEffect(()=>{
        ref.current = count
    },[count])
    return ref.current
}