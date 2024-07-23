import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContext from './components/ContextApi/MyContext.jsx'
import { router } from './components/useEffectHook/UseEffectRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyContext>
  <>

    <App />
  </>
  // </MyContext>,
)
