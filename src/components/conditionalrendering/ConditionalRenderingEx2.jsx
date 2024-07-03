import React, { useState } from 'react'

const ConditionalRenderingEx2 = () => {
  let website = prompt("enter website")
  let [state, setState] = useState(website)
  return (
    <div>
      <a href={state == "w3school" ? "https://www.w3schools.com/" : (state == "javatpoint" ? "https://www.javatpoint.com/" : (state == "mdn" ? "https://developer.mozilla.org/en-US/" : (state == "stack" ? "https://stackoverflow.com/" : "https://stackoverflow.com/questions/55751806/redirection-to-404-page-for-bad-fake-pages-not-working")))}>click</a>
    </div >
  )
}

export default ConditionalRenderingEx2