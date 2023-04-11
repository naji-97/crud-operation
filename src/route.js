import About from "./About"
import Home from "./Home"

// export const routes =(
// <Routes>
//   <Route exact path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
// </Routes>
// )


const  routes= [
 {
    path:"/",
    element:<Home />,
 },
 {
    path:"/about",
    element:<About />,
 },
]

export default routes