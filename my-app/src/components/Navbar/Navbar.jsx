import React from "react";
import './navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {

	return (
		<div>
			<header className="navbar">
				<NavLink to={'/firstHome'} id="logo">Higher.kz</NavLink>
				<ul className="nav">
					<li><NavLink to={'/register'} id="nav__active">Главная</NavLink></li>
					<li><NavLink to={'/register'}>Уч.заведения</NavLink></li>
					<li><NavLink to={'/register'}>Загрузить диплом</NavLink></li>
					<li><NavLink to={'/register'}>Контакты</NavLink></li>
				</ul>
				<div>
					<NavLink to={'/login'} className="button__auth">Вход</NavLink>
					<button className="button__registr"><NavLink to={'/register'}>Регистрация</NavLink></button>
				</div>
			</header >
			<div className="navbar__mobile">
				<NavLink to={'/'}><img src="img/firstHome/mobile/home.svg"></img></NavLink>
				<NavLink to={'/'} ><img src="img/firstHome/mobile/univer.svg"></img></NavLink>
				<NavLink to={'/registr'} id="navbar__mobile__diplom" >Диплом</NavLink>
				<NavLink to={'/'}><img src="img/firstHome/mobile/support.svg"></img></NavLink>
				<NavLink to={'/registr'}><img src="img/firstHome/mobile/user.svg"></img></NavLink>
			</div>
		</div>

	)

}

export default Navbar;