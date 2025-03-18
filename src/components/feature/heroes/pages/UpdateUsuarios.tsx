import { useLocation } from "react-router-dom"


export const UpdateHeroes = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <div>UpdateHeroes</div>
  )
}
