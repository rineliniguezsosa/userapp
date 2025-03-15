import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import { Home } from "../components/feature/heroes/pages/Home"
import { Nav } from "../components/layout/nav/Nav"


export const HeroesRouter = () => {
  return (
    <BrowserRouter>
        <main>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>

                <Route path="/*" element={<Navigate to="/"/>}></Route>
            </Routes>
        </main>
    </BrowserRouter>
  )
}
