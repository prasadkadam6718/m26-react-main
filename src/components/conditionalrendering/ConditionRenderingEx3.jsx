import React from 'react'
import NotFound from './NotFound';
import Home from './pages/Home';
import Landing from './pages/Landing';
import About from './pages/About';

const ConditionRenderingEx3 = () => {
  let page = prompt("enter page you want to visit")
  switch (page) {
    case "home": return <Home />; break;
    case "landing": return <Landing />; break;
    case "about": return <About />; break;
    default: return <NotFound />
  }
}
export default ConditionRenderingEx3