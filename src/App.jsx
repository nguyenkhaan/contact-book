import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './Component/Heading'
import Input from './Component/Input'
import Container from './Component/Container'
//Fake API 
const personLists = [
  {
      id: 1, 
      name: 'Alice Johnson', 
      address: 'New York'
  }, 
  {
      id: 2, 
      name: 'Bob Smith', 
      address: 'Los Angeles'
  },
  {
      id: 3, 
      name: 'Charlie Brown', 
      address: 'Chicago'
  },
  {
      id: 4, 
      name: 'David Williams', 
      address: 'Houston'
  }, 
  {
      id: 5, 
      name: 'Emma Davis', 
      address: 'Phoenix'
  }
]
function App() {
  return (
    <div>
      <Heading />
      <Input /> 
      <Container children = {personLists} /> 
    </div>
  )
}
export default App