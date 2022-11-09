import { useEffect } from "react"

const useTitle = (title) =>{

    useEffect(()=>{
          document.title = `${title} | Physcare.com`
    },[title])
} 

export default useTitle;