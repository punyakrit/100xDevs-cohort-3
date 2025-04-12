import { useRef } from "react";

export function useDebounce(originalFn){
    const currentClock = useRef()

    function fn(){
        clearTimeout(currentClock.current)
        currentClock.current = setTimeout(originalFn,200)

    }
    return fn
}