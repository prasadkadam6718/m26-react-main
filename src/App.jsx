import React from 'react'
import Layout from './components/Layout/Layout'
import Layout2 from "./components/Layout/Layout2"
import InlineCss from './components/howToUseInlineCss/InlineCss'
import TailwindIntro from './components/howToUseTailwind/TailwindIntro'
import UseStateIntro from './components/UseStateHook/UseStateIntro'
import ClassBasedIntro from "./components/classBasedComp/ClassBasedIntro"

import PropsIntro from './components/props/PropsIntro'
import ConditionalRenderingIntro from './components/conditionalrendering/ConditionalRenderingIntro';
import MapIntro from './components/map/MapIntro'
import RandomComponent from './components/ContextApi/RandomComponent';
import EventsIntro from './components/synthetic Events/EventsIntro'
import HmrIntr from './components/hmr/HmrIntr'
import UseEffectInto from './components/useEffectHook/UseEffectInto'
import UseMemoIntro from './components/useMemo hook/UseMemoIntro'
import HocIntro from './components/hoc/HocIntro'
import UseReducerEx1 from './components/useReducer hook/UseReducerEx1';
import UseRedicerIntro from './components/useReducer hook/UseRedicerIntro'
import { RouterProvider } from 'react-router-dom'
import { router } from "./components/routing/AppRoutes"

const App = () => {
  return (
    <div>

      {/* layout1 */}
      {/* <div>
        <Layout />
      </div> */}


      {/* layout2 */}
      {/* <div>
        <Layout2 />
      </div> */}

      {/* how to use inline css  */}
      {/* <div>
        <InlineCss />
      </div> */}

      {/* how to use tailwind */}
      {/* <div>
        <TailwindIntro />
      </div> */}


      {/* useState hook */}
      {/* <div>
        <UseStateIntro />
      </div> */}

      {/* classbasedComponet */}
      {/* <div>
        <ClassBasedIntro />
      </div> */}


      {/* props in react */}
      {/* <div>
        <PropsIntro />
      </div> */}

      {/* conditional rendering */}
      {/* <div>
        <ConditionalRenderingIntro />
      </div> */}

      {/* map */}
      {/* <div>
        <MapIntro />
      </div> */}

      {/* <div>
        <RandomComponent />
      </div> */}


      {/* Synthetic Events */}
      {/* <div>
        <EventsIntro></EventsIntro>
      </div> */}
      {/* <div>
        <HmrIntr />
      </div> */}

      {/* <div>
        <UseEffectInto></UseEffectInto>
      </div> */}
      {/* <div>
        <UseMemoIntro />
      </div> */}
      {/* <div>
        <HocIntro />
      </div> */}
      {/* <div>
        <UseRedicerIntro />
      </div> */}
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>

    </div>
  )
}

export default App