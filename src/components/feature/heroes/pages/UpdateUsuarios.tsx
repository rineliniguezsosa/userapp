/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom"


export const UpdateHeroes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const _id = queryParams.get("_id");
  console.log(location);
  console.log("q",queryParams.get("_id"));
  
  const getUserByMongoId = (_id:string) =>{
    try {
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    if(_id){
      getUserByMongoId(_id);
    }else{
      navigate('/')
    }
  },[_id,navigate])
  
  
  return (
    <div>UpdateHeroes</div>
  )
}
