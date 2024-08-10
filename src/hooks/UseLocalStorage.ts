import { useEffect, useState } from "react"

export const useLocalStorage = <T>(name: string ) => {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(name)
        if (jsonValue != null) return JSON.parse(jsonValue)
    })

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(value))
    }, [value])

    return [value, setValue] as [typeof value, typeof setValue]
    
}