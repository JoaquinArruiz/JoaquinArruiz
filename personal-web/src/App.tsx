import { useState } from 'react'
import Top from './component/Top.tsx'
import Aboutme from './component/About-me.tsx'
import Career from './component/Career.tsx'
import Education from './component/Education.tsx'
import './styles/app.scss'

function App() {

  return (
    <>
      <Top></Top>
      <Aboutme></Aboutme>
      <Career></Career>
      <Education></Education>
    </>
  )
}

export default App
