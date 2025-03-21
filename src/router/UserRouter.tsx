import { HashRouter,Routes,Route,Navigate } from "react-router-dom"
import { Home } from "../components/feature/heroes/pages/Home"
import { Nav } from "../components/layout/nav/Nav"
import { UpdateUsuarios } from "../components/feature/heroes/pages/UpdateUsuarios"


export const UserRouter = () => {
  return (
    <HashRouter>
        <main>
            <Nav/>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/edit/heroe" element={<UpdateUsuarios />}></Route>

                <Route path="/*" element={<Navigate to="/home"/>}></Route>
            </Routes>
        </main>
    </HashRouter>
  )
}
