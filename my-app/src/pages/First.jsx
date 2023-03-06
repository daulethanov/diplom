import React from "react";
import './css/firstHome.css';
import Navbar from "../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Futer from "../components/futer/Futer";
import SimpleSlider from "../components/slide/slide";

function FirstHome() {

	return (

		<div className="first__home">
			{/* начало меню */}
			<Navbar></Navbar>

			{/* конец меню */}
			{/* начало контента */}

			<div className="width">
				{/* начало первый блок с картинкой  */}
				<div className="first__home__content__top">
					{/* начало левая часть  */}
					<div className="first__home__content__top__left">
						<h1>Получай знания в лучших <span id="content__top__left__h1__color">Международных вузов</span> </h1>
						<h4>Ещё не решил куда поступить?
							<p>С помощью Higher.kz ты сможешь найти учебное заведение специально для тебя.</p>
						</h4>
						<button className="first__home__content__top__left__button mobile__none"><NavLink to={'/registr'}>Начать</NavLink></button>
						<div className="first__home__content__top__left__statistics mobile__none">
							<div className="first__home__content__top__left__statistics__content">
								<h2>100+</h2>
								<h3>Учебных заведений. </h3>
							</div>
							<div className="first__home__content__top__left__statistics__content">
								<h2>1К+</h2>
								<h3>Счастливых Студентов</h3>
							</div>
							<div className="first__home__content__top__left__statistics__content">
								<h2>20+</h2>
								<h3>Зарубежных стран</h3>
							</div>
						</div>
					</div>
					{/* когнец левая часть  */}
					{/* начало правая чать */}
					<div className="first__home__content__top__right">
						<img src="img/firstHome/planet.png" alt="planet" />
					</div>
					{/* конец правая чать */}
				</div>
				{/* начало мобильная версия */}
				<div className="first__home__content__top__mobile">
					<button className="first__home__content__top__left__button "><NavLink to={'/registr'}>Узнать сейчас</NavLink></button>
					<div className="first__home__content__top__left__statistics__mobile">
						<div className="first__home__content__top__left__statistics__content">
							<h2>100+</h2>
							<h3>Учебных заведений. </h3>
						</div>
						<div className="first__home__content__top__left__statistics__content">
							<h2>1К+</h2>
							<h3>Счастливых Студентов</h3>
						</div>
						<div className="first__home__content__top__left__statistics__content">
							<h2>20+</h2>
							<h3>Зарубежных стран</h3>
						</div>
					</div>
				</div>
				{/* конец мобильная версия */}

				{/* конец первый блок с картинкой  */}
				{/* начало ссылки  */}
				<div className="first__home__content__top__link mobile__none">
					<a href="#" className="link__google"></a>
					<a href="#" className="link__instagram"></a>
					<a href="#" className="link__facebook"></a>
				</div>
				{/* конец ссылки  */}
				{/* начало как работает сервис */}
				<div className="servese mobile__none">
					<h2>Как работает сервис</h2>
					<img src="img/firstHome/block.png" alt="block" />
				</div>
				{/* начало мобильный слайдер */}
				<div className="servese__mobile">
					<SimpleSlider></SimpleSlider>
				</div>
				{/* конец мобильный слайдер */}
				{/* конец как работает сервис */}

				<div className="servise__info">
					<div className="servise__info__left">
						<img src="img/firstHome/serves.png" alt="servise" />
					</div>
					<div className="servise__info__right  mobile__none">
						<div className="servise__info__right__position">
							<h2>Обучайся в <p>зарубежных вузах</p></h2>
							<h4>Вы можете поступить в зарубежные вузы на заочное обучение. <p>Обучаться удаленно выбранной профессии.</p></h4>
							<div className="servise__info__right__position__checked">
								<div className="servise__info__right__position__checked__content">
									<div className="servise__info__right__position__checked__items checked__items__indent">
										<img src="img/firstHome/checked.svg" alt="checked" />
										<h3>Мировые стандарты</h3>
									</div>
									<div className="servise__info__right__position__checked__items ">
										<img src="img/firstHome/checked.svg" alt="checked" />
										<h3> Полное сопровождение </h3>
									</div>
								</div>
								<div className="servise__info__right__position__checked__content">
									<div className="servise__info__right__position__checked__items checked__items__indent">
										<img src="img/firstHome/checked.svg" alt="checked" />
										<h3>Стабильность</h3>
									</div>
									<div className="servise__info__right__position__checked__items">
										<img src="img/firstHome/checked.svg" alt="checked" />
										<h3>Рабочий оффер</h3>
									</div>
								</div>
							</div>
							<button className="servise__info__right__position__button"><NavLink to={'/registr'}>Начать</NavLink></button>
						</div>
					</div>
				</div>
				<div className="servise__info__right__mobile">
					<div className="servise__info__right__position">
						<h2>Обучайся в <p>зарубежных вузах</p></h2>
						<h4>Вы можете поступить в зарубежные вузы на заочное обучение. <p>Обучаться удаленно выбранной профессии.</p></h4>
						<div className="servise__info__right__position__checked">
							<div className="servise__info__right__position__checked__content">
								<div className="servise__info__right__position__checked__items checked__items__indent">
									<img src="img/firstHome/checked.svg" alt="checked" />
									<h3>Мировые стандарты</h3>
								</div>
								<div className="servise__info__right__position__checked__items ">
									<img src="img/firstHome/checked.svg" alt="checked" />
									<h3> Полное сопровождение </h3>
								</div>
							</div>
							<div className="servise__info__right__position__checked__content">
								<div className="servise__info__right__position__checked__items checked__items__indent">
									<img src="img/firstHome/checked.svg" alt="checked" />
									<h3>Стабильность</h3>
								</div>
								<div className="servise__info__right__position__checked__items">
									<img src="img/firstHome/checked.svg" alt="checked" />
									<h3>Рабочий оффер</h3>
								</div>
							</div>
						</div>
						<button className="servise__info__right__position__button"><NavLink to={'/registr'}>Начать</NavLink></button>
					</div>
				</div>

				<div className="width content__bottom__comments__mobile">
					<div className="content__bottom__comments__txt">
						<h2>Комментарии студентов</h2>
						<button className="content__bottom__comments__txt__button mobile__none"><NavLink to={'/registr'}>Посмотреть больше</NavLink></button>
					</div>
					<div className="content__bottom__content">
						<div className="content__bottom__content__item">
							<div className="content__bottom__content__item__foto">
								<img src="img/firstHome/comments__foto1.svg" alt="userFoto" />
								<div className="content__bottom__content__item__foto__name">
									<h3>Алихан Борода</h3>
									<h4>Oxford Student</h4>
									<img src="img/firstHome/star.svg" alt="" />
								</div>
							</div>
							<img src="img/firstHome/border.svg" alt="" id="border" />
							<h4>Ребятааа знаете я вам так скажу, я не пожалел что обратился в компанию Higher.kz. Ведь сейчас я в лучшем...</h4>
						</div>
						<div className="content__bottom__content__item">
							<div className="content__bottom__content__item__foto">
								<img src="img/firstHome/comments__foto2.svg" alt="userFoto" />
								<div className="content__bottom__content__item__foto__name">
									<h3>Загидуллин Р</h3>
									<h4>Boston Universty</h4>
									<img src="img/firstHome/star.svg" alt="" />
								</div>
							</div>
							<img src="img/firstHome/border.svg" alt="" id="border" />
							<h4>Благодаря сайту я смог определиться
								куда хочу поступить, и сайт мне подобрал Вузы по моим баллам ЕНТ </h4>
						</div>
						<div className="content__bottom__content__item">
							<div className="content__bottom__content__item__foto">
								<img src="img/firstHome/comments__foto3.svg" alt="userFoto" />
								<div className="content__bottom__content__item__foto__name">
									<h3>Малика Голова</h3>
									<h4>Fazanka Student</h4>
									<img src="img/firstHome/star.svg" alt="" />
								</div>
							</div>
							<img src="img/firstHome/border.svg" alt="" id="border" />
							<h4>Ну я в итогу в фазенке , потому что не обратилась к этому сервису раньше. Не теряйте возможность, вперёд сейчас</h4>
						</div>
					</div>
					<div className="content__bottom__comments__txt__button__position__mobile">
						<button className="content__bottom__comments__txt__button "><NavLink to={'/registr'}>Посмотреть больше</NavLink></button>
					</div>

				</div>
			</div>
			<div className="content__bottom">
				<div className="content__bottom__comments mobile__none">
					<div className="width">
						<div className="content__bottom__comments__txt">
							<h2>Комментарии студентов</h2>
							<button className="content__bottom__comments__txt__button mobile__none"><NavLink to={'/registr'}>Посмотреть больше</NavLink></button>
						</div>
						<div className="content__bottom__content">
							<div className="content__bottom__content__item">
								<div className="content__bottom__content__item__foto">
									<img src="img/firstHome/comments__foto1.svg" alt="userFoto" />
									<div className="content__bottom__content__item__foto__name">
										<h3>Алихан Борода</h3>
										<h4>Oxford Student</h4>
										<img src="img/firstHome/star.svg" alt="" />
									</div>
								</div>
								<img src="img/firstHome/border.svg" alt="" id="border" />
								<h4>Ребятааа знаете я вам так скажу, я не пожалел что обратился в компанию Higher.kz. Ведь сейчас я в лучшем...</h4>
							</div>
							<div className="content__bottom__content__item">
								<div className="content__bottom__content__item__foto">
									<img src="img/firstHome/comments__foto2.svg" alt="userFoto" />
									<div className="content__bottom__content__item__foto__name">
										<h3>Загидуллин Р</h3>
										<h4>Boston Universty</h4>
										<img src="img/firstHome/star.svg" alt="" />
									</div>
								</div>
								<img src="img/firstHome/border.svg" alt="" id="border" />
								<h4>Благодаря сайту я смог определиться
									куда хочу поступить, и сайт мне подобрал Вузы по моим баллам ЕНТ </h4>
							</div>
							<div className="content__bottom__content__item">
								<div className="content__bottom__content__item__foto">
									<img src="img/firstHome/comments__foto3.svg" alt="userFoto" />
									<div className="content__bottom__content__item__foto__name">
										<h3>Малика Голова</h3>
										<h4>Fazanka Student</h4>
										<img src="img/firstHome/star.svg" alt="" />
									</div>
								</div>
								<img src="img/firstHome/border.svg" alt="" id="border" />
								<h4>Ну я в итогу в фазенке , потому что не обратилась к этому сервису раньше. Не теряйте возможность, вперёд сейчас</h4>
							</div>
						</div>
					</div>

				</div>

				<div className="content__bottom__button mobile__none">
					<h2>Загрузи свой диплом сейчас и вперёд</h2>
					<button className="content__bottom__button__link"><NavLink to={'/registr'}>Начать</NavLink></button>
				</div>
				<Futer></Futer>
			</div>

			{/* конец контента */}
		</div>

	)

}

export default FirstHome;