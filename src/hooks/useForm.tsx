import axios from "axios";
import { useState } from "react"
const saveUser = import.meta.env.VITE_SAVEUSER;
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

            const {name, streetNumber, streetName, city, state, country, postcode, email, nat } = form;
            const isValid = !name || !streetNumber || !streetName || !city || !state || !country || !postcode || !email || !nat
            
            if(isValid){
                alert("Todos los campos son obligatorios");
                return;
            }

            if(!/[A-Za-z]/.test(name)){
                alert("El nombre solo debe de incluir letras");
                return ;
            }

            if(!/[0-9]+/.test(streetNumber)){
                alert('El campo número de calle debe de incluir solo números');
                return ; 
            }
            
            if(!/[A-Za-z]/.test(streetName)){
                alert("El campo nombre de calle solo debe de incluir letras");
                return ;
            }

            if(!/[A-Za-z]/.test(city)){
                alert("El campo ciudad solo debe de incluir letras");
                return ;
            }

            if(!/[A-Za-z]/.test(state)){
                alert("El campo estado solo debe de incluir letras");
                return ;
            }

            if(!/[A-Za-z]/.test(country)){
                alert("El campo país solo debe de incluir letras");
                return ;
            }

            if(!/[0-9]{4}$/.test(postcode)){
                alert("El campo codigo postal no cumple con los requisitos");
                return ;
            }

            // eslint-disable-next-line no-useless-escape
            if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)){
                alert("El campo email no cumple con los requisitos");
                return ;
            }

            if(!/^[A-Za-z]{2}$/.test(nat)){
                alert("El campo nacionalidad debe de incluir una abreviatura de 2 letras: México : Mx")
                return ;
            }

            const data = {
                name:name,
                gender:'female',
                location:{
                    street:{
                        number: streetNumber,
                        name: streetName
                    },
                    city:city,
                    state:state,
                    country:country,
                    postcode:postcode
                },
                email:email,
                nat:nat
            }

            console.log(data);

            try {
                const req = await axios.post(saveUser,data);

                console.log(req);
                
            } catch (error) {
                console.log(error);
            }
            
    }
    
    return {
        form,
        handleChange,
        handleSubmit
    }
}