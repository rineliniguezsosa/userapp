import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "../components/feature/heroes/pages/Home"
import { Nav } from "../components/layout/nav/Nav"


export const HeroesRouter = () => {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" Component={Home}></Route>
        </Routes>
    </BrowserRouter>
  )
}
