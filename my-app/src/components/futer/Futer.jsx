import React from "react";
import './futer.css';
import { NavLink } from "react-router-dom";

function Futer() {

	return (
		<futer id="futer">
			<div className="width">
				<div className="futer__content mobile__none">
					<div className="futer__content__item">
						<NavLink to={'/firstHome'}><h2>Highter.kz</h2></NavLink>
						<a href="#" className="futer__content__item__link"><img src="img/firstHome/futer__twit.svg" alt="twiter" /></a>
						<a href="#" className="futer__content__item__link"><img src="img/firstHome/futer__facebook.svg" alt="facebook" /></a>
						<a href="#" className="futer__content__item__link"><img src="img/firstHome/futer__instagram.svg" alt="instagram" /></a>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Сайт</h3></li>
							<li ><NavLink to={'/firstHome'} className="futer__content__item__li">Главная</NavLink ></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Учебные заведения</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Специальности</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Регистрация</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Университеты</h3></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Прага</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Лондон</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">США</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Китай</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Онлайн</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Коммерция</h3></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Сотрудничество</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Партнёры</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Оплата</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Блог</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Учебный центр</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Частые вопросы</h3></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Проживание</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Образование</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Профессии</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Экзамены</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Диплом</NavLink></li>
						</ul>
					</div>
				</div>
				<div className="futer__content__mobile">

					<div className="futer__content__item">
						<ul>
							<li><h3>Сайт</h3></li>
							<li ><NavLink to={'/firstHome'} className="futer__content__item__li">Главная</NavLink ></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Учебные заведения</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Специальности</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Регистрация</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Университеты</h3></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Прага</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Лондон</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">США</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Китай</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Онлайн</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Коммерция</h3></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Сотрудничество</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Партнёры</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Оплата</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Блог</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Учебный центр</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<ul>
							<li><h3>Частые вопросы</h3></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Проживание</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Образование</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Профессии</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Экзамены</NavLink></li>
							<li><NavLink to={'/'} className="futer__content__item__li">Диплом</NavLink></li>
						</ul>
					</div>
					<div className="futer__content__item">
						<NavLink to={'/firstHome'}><h2>Highter.kz</h2></NavLink>
						<a href="#" className="futer__content__item__link"><img src="img/firstHome/futer__twit.svg" alt="twiter" /></a>
						<a href="#" className="futer__content__item__link"><img src="img/firstHome/futer__facebook.svg" alt="facebook" /></a>
						<a href="#" className="futer__content__item__link"><img src="img/firstHome/futer__instagram.svg" alt="instagram" /></a>
					</div>
				</div>
				<div className="futer__revatti__position">
					<div className="futer__revatti">
						<img src="img/firstHome/revatti.svg" alt="revatti" />
					</div>
				</div>

			</div>
		</futer>
	)

}

export default Futer;