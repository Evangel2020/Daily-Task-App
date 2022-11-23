import React from 'react'
import './App.css'
import Home from './pages/Home/index'
import TodoPage from './pages/Todopage/index'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todopage" element={<TodoPage />} />
    </Routes>
  )
}

export default App
