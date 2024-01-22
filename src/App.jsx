import { useState } from 'react'
import Page from './Page'
import AnimatedCursor from "react-animated-cursor";



function App() {
  const [theme, setheme] = useState(true)
  const dark = "dark"
  return (
    <main className={`${theme && dark}`}>
        <div>
      <AnimatedCursor
        innerSize={13}
        outerSize={20}
        color={theme?"255, 255, 255":"0, 0, 0"}
        outerAlpha={3}
        innerScale={0.7}
        outerScale={1.9}
        className=" mix-blend-normal"
      />
    </div>
      <div className='w-full dark:bg-black bg-[#F5F5F5] '>
     <Page setheme={setheme} theme={theme}/>
     </div>
    </main>
  )
}

export default App
