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

    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) =>{
            console.log(event);
            event.preventDefault();

            const {name, streetNumber, streetName, city, state, country } = form;
            const isValid = !name || !streetNumber || !streetName || !city || !state || !country
            
            if(isValid){
                alert("Todos los campos son obligatorios");
                return;
            }
            
    }
    
    return {
        form,
        handleChange,
        handleSubmit
    }
}