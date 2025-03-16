import { useState } from "react"

interface FormState<T> {
    [key: string]: T;
}

export const useForm = <T extends FormState<string>>(initialForm:T) =>{
    console.log(initialForm);
    
    return {

    }
}