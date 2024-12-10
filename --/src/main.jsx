import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Todo from './components/Todo'
import style from './components/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Todo />
    
  </React.StrictMode>,
)
