/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { MuiForm } from "../../../MuiComponents";
const getuserbyid = import.meta.env.VITE_USERBYID;

export const UpdateHeroes = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const _id = queryParams.get("_id");
  console.log(location);
  console.log("q",queryParams.get("_id"));
  
  const getUserByMongoId = async() =>{
    try {
      const req = await axios.get(`${getuserbyid}/${_id}`)
      console.log(req);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(()=>{
    getUserByMongoId();
  },[_id])
  
  
  return (
    <div className="w-full m-auto">
      <MuiForm title="Actualizar registros" onSubmit={()=>{}} >
          <h1>jjj</h1>
      </MuiForm>
    </div>
  )
}
