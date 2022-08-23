import { useContext, useEffect } from "react"
import { dataContext } from "./form"

const LocalConnection=()=>{
    const {data} = useContext(dataContext)
    useEffect(()=>{
        if(data.title){
            // localStorage.setItem('title')
            // localStorage.setItem('firstname')
            // localStorage.setItem('lastname')
            // localStorage.setItem('bithday')
            // localStorage.setItem('nationality')
            // localStorage.setItem('ID')
            // localStorage.setItem('gender')
            // localStorage.setItem('code')
            // localStorage.setItem('phone')
            // localStorage.setItem('passport')
            // localStorage.setItem('salary')
        }
    },[data])
}
export default LocalConnection