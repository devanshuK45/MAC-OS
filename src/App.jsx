import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock.jsx'


function App() {


  return (
    <main>
      <Dock />
    </main>
  )
}
//yeah, this is the main app component. It imports the Dock component and renders it inside a main tag. The app also imports some styles from "app.scss".

export default App
