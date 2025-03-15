import { NavLink } from "react-router-dom"
import Brightness5Icon from '@mui/icons-material/Brightness5';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export const Nav = () => {
  return (
    <nav className="w-full border-2 border-red-500 p-5 flex justify-between">
        <NavLink className="" to="/">Usuarios CRUD</NavLink>

        <div>
          <Brightness5Icon/> / <ModeNightIcon/>
        </div>
    </nav>
  )
}
