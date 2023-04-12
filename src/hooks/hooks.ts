import { useEffect, useState } from "react"
import { REG_EX } from "../constants/regex"

export const useIsValidEmail = (value: string) => {
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        setIsValid(REG_EX.EMAIL.test(value))
    }, [value])

    return isValid
}

interface UseDebounceParams {
    value: any
    time?: number
    callback?: ()=>void
}

export const useDebounce = ({value, time = 250, callback}:UseDebounceParams) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
            if(callback) callback()
            console.log('Changing personal info')
        }, time)

        return () => {
            clearTimeout(timeout)
        }
    }, [value, time])

    return debounceValue
}