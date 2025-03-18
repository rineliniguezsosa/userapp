import { useLocation } from "react-router-dom"


export const UpdateHeroes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(location);
  console.log("q",queryParams.get("_id"));
  
  
  return (
    <div>UpdateHeroes</div>
  )
}
