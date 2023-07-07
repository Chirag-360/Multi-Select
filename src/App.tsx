import { useState } from "react"
import { Select } from "./Select"

const options = [
  { label:"first", value:1 },
  { label:"second", value:2 },
  { label:"third", value:3 },
  { label:"fourth", value:4 },
  { label:"five", value:5 },
  { label:"six", value:6 },
]

function App() {
  const [value , setValue] = useState(options[0])
  return (
    <>
    <Select options={options} value={value} onChange={o => setValue(o)} />
    </>
  )
}

export default App  
