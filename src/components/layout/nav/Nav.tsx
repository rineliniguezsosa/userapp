import { NavLink } from "react-router-dom"


export const Nav = () => {
  return (
    <nav className="w-full border-2 border-red-500 p-5 flex justify-between">
        <NavLink className="" to="/">Usuarios CRUD</NavLink>

    </nav>
  )
}
