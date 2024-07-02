import React from 'react'
import Layout from './components/Layout/Layout'
import Layout2 from "./components/Layout/Layout2"
import InlineCss from './components/howToUseInlineCss/InlineCss'
import TailwindIntro from './components/howToUseTailwind/TailwindIntro'
import UseStateIntro from './components/UseStateHook/UseStateIntro'
import ClassBasedIntro from "./components/classBasedComp/ClassBasedIntro"

import PropsIntro from './components/props/PropsIntro'
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
      <div>
        <PropsIntro />
      </div>


    </div>
  )
}

export default App