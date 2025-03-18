import { NavLink } from "react-router-dom"


export const Nav = () => {
  return (
    <nav className="w-full p-5 flex justify-between">
        <NavLink className="" to="/home">Usuarios CRUD</NavLink>

    </nav>
  )
}
