import { createBrowserRouter } from "react-router-dom";
import Website from "./Website";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Website />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />

      }
    ]
  }
])




  < BrowswerRouter >
  <Routes>
    <Route></Route>
  </Routes>
  </ >