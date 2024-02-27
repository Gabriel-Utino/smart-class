import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        <li>Aluno</li>
        <ul>
          <li>Notas</li>
          <li>Faltas</li>
        </ul>
        <li>Calendario</li>
        <li>Financeiro</li>
        <li>Mapa de escola</li>
        <li>Chat</li>
      </ul>
    </div>
  )
}
