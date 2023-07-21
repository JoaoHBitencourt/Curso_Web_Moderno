import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="/user">
                <i className="fa fa-user"></i> Usuários
            </a>
            <a href="/coder">
                <i className="fa fa-code"></i> Codar
            </a>
            <a href="/cafe">
                <i className="fa fa-coffee"></i> Café
            </a>
            <a href="/Linkedin">
                <i className="fa fa-linkedin"></i> Linkedin
            </a>
            <a href="/Github">
            <i className="fa fa-github"></i> Github
            </a>
        </nav>
    </aside>