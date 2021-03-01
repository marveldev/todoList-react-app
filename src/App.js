import { React, useState } from 'react'
import { Form } from './component'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div>
      <h1>My TodoList App</h1>
      <Form setInputText={setInputText} />
    </div>
  );
}

export default App
