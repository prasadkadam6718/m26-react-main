import { createBrowserRouter } from "react-router-dom"
import UseEffectEx4 from "./UseEffectEx4"
import UseEffectEx5 from "./UseEffectEx5"
export let router = createBrowserRouter([
  {
    path: "/",
    element: <UseEffectEx4 />
  },
  {
    path: "/ex5",
    element: <UseEffectEx5 />
  }
])