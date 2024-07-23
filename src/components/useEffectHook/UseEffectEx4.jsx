import { useEffect } from "react";
import { Link } from "react-router-dom"

const UseEffectEx4 = () => {
  let myIntervals = setInterval(() => {
    console.log("hieee")
  }, 1000);
  useEffect(() => {
    return () => {
      clearInterval(myIntervals)
    }
  }, [])
  return (
    <div>
      <Link to="/ex5">Navigate to ex5</Link>
    </div>
  )
}

export default UseEffectEx4