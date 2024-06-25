import React from 'react'
import Layout from './components/Layout/Layout'
import Layout2 from "./components/Layout/Layout2"
import InlineCss from './components/howToUseInlineCss/InlineCss'
import TailwindIntro from './components/howToUseTailwind/TailwindIntro'
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
      <div>
        <TailwindIntro />
      </div>
    </div>
  )
}

export default App