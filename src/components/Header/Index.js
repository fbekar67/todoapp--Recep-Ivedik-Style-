import  NewTodoForm  from "./NewTodoForm/Index"
import React from 'react'


function Header() {
  return (
    <header className="header">
		<h1>Recep Ivedik's Todos</h1>
		<NewTodoForm/>
	</header>
  )
}

export default Header     