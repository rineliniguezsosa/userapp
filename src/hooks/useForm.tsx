import { useState } from "react"

interface FormState<T> {
    [key: string]: T;
}

export const useForm = <T extends FormState<string>>(initialForm:T) =>{
    console.log(initialForm);
    const [form, setform] = useState(initialForm)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target

        setform( prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    
    return {
        form,
        handleChange
    }
}