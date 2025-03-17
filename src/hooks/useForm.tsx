import { useState } from "react"

interface FormState {
    [key: string]: string;
}

export const useForm = (initialForm:FormState) =>{
    console.log(initialForm);
    const [form, setform] = useState(initialForm)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
        const {name,value} = e.target
        console.log(name,value);
        
        setform( prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = async() =>{

    }
    
    return {
        form,
        handleChange,
        handleSubmit
    }
}