import React from "react";
import './video.css';

function Video() {



	return (
		<div>
			<div className="video mobile__none">
				<div className="video__txt">
					<h2>Работаем со множеством стран
						Наши студенты по всему миру</h2>
					<p><h3>Наш сервис даёт возможность вам подобрать для себя наилучший путь за рубежом. Нужно иметь диплом об окончание колледжа или всех классов школы.</h3></p>
					<p><h3>Загружая диплом на сервис, сервис по вашим данным из диплома подбирает для вас лучшие варианты</h3></p>
				</div>
				<div className="video__item">
					<video controls muted poster="img/firstHome/video__foto.jpg">
						<source src="img/firstHome/video.webm" type='video/webm; codecs="vp8, vorbis"'></source>
					</video>
				</div>
			</div>
			<div className="video__mobile">
				<h2>Работаем со множеством стран
					Наши студенты по всему миру</h2>
				<video controls muted poster="img/firstHome/video__foto.jpg">
					<source src="img/firstHome/video.webm" type='video/webm; codecs="vp8, vorbis"'></source>
				</video>
				<p><h3>Наш сервис даёт возможность вам подобрать для себя наилучший путь за рубежом. Нужно иметь диплом об окончание колледжа или всех классов школы.</h3></p>
				<hr></hr>
				<p><h3>Загружая диплом на сервис, сервис по вашим данным из диплома подбирает для вас лучшие варианты</h3></p>

			</div>
		</div>


	)

}

export default Video;