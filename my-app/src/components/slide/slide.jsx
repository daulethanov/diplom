import React, { Component } from "react";
import Slider from "react-slick";
import './slide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000

		};
		return (

			<Slider {...settings}>

				<div className="conteiner">
					<div className="block block1">
						<div className="block__txt">
							<h3>Загрузи
								свой диплом</h3>
							<h4>Загружаешь диплом
								Ждёшь обработки
								Получаешь подходящие
								Вузы</h4>
						</div>
					</div>
					<div className="block__mini block__mini1">
						<img src="img/firstHome/mobile/slider/block__mini__foto1.svg" alt="" className="block__mini__foto" />
					</div>

				</div>
				<div className="conteiner">
					<div className="block block2">
						<div className="block__txt">
							<h3>Выбери
								направление</h3>
							<h4>Выбираешь рекомендованное направление</h4>
						</div>
					</div>
					<div className="block__mini block__mini2">
						<img src="img/firstHome/mobile/slider/block__mini__foto2.svg" alt="" className="block__mini__foto" />
					</div>
				</div>
				<div className="conteiner">
					<div className="block block3">
						<div className="block__txt">
							<h3>Получи письмо
								на обучение</h3>
							<h4>Отправил документы
								Получил положительный ответ от ВУЗА</h4>
						</div>
					</div>
					<div className="block__mini block__mini3">
						<img src="img/firstHome/mobile/slider/block__mini__foto3.svg" alt="" className="block__mini__foto" />
					</div>
				</div>
				<div className="conteiner">
					<div className="block block4">
						<div className="block__txt">
							<h3>Получи письмо
								на обучение</h3>
							<h4>Отправил документы
								Получил положительный ответ от ВУЗА</h4>
						</div>
					</div>
					<div className="block__mini block__mini4">
						<img src="img/firstHome/mobile/slider/block__mini__foto4.svg" alt="" className="block__mini__foto" />
					</div>
				</div>

			</Slider>

		);
	}
}