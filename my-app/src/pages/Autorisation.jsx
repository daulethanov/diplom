import React, { useState } from "react";
import './css/autarisation.css';
import { NavLink } from "react-router-dom";
import ButtonFormAuth from "../components/button/buttonForm/ButtonForm";
import InputFormAuth from "../components/input/Input";


function Autorisation() {

	// начало состояния email и пароля
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// конец состояния email и пароля

	// начало показать пароль
	const [showPassword, setShowPassword] = useState(false)
	// конец показать пароль

	// начало функция для отправки дынных на сервер
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Email: ${email}, Password: ${password}`);

	}
	// конец функция для отправки дынных на сервер

	return (

		<div className="autorisation">
			{/* начало левая картинка */}
			<div className="form__auth__right">
				<img className="form__auth__right__img" src="img/formAuth/form__fon__left.jpg" alt="foto" />
				<div className="form__auth__right__opacity "></div>
			</div>
			{/* конец левая картинка */}

			{/* начало форма входа */}
			<div className="form__auth__left">
				<img className="form__auth__left__img" src="img/formAuth/form__fon__right.jpg" alt="foto"></img>
				<div className="form__auth__left__content">
					<h2>Higher.kz</h2>
					<h3>Твоё образование в твоих руках</h3>
					<h2>Авторизация</h2>
					<h4>Войдите с помощью</h4>
					<div className="form__auth__left__content__sety">
						<img src="img/formAuth/form__fecebook.svg" alt="fecebook" />
						<img src="img/formAuth/form__google.svg" alt="google" />
					</div>
					<h4>или</h4>
					<form onSubmit={handleSubmit}>
						{/* начало поле email */}
						<InputFormAuth
							type="email"
							placeholder="Почта"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></InputFormAuth>
						{/* конец поле email */}
						{/* начало поле пароля */}
						<InputFormAuth
							type={showPassword ? 'text' : 'password'}
							placeholder="Пароль"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onMouseOver={() => setShowPassword(true)}
							onMouseOut={() => setShowPassword(false)}
						></InputFormAuth>
						{/* конец поле пароля */}
						<h4 id="link__auth">Нет аккаунта? Не беда, <p>пройди <NavLink to='/registr'>регистрацию</NavLink ></p></h4>
						{/* начало кнопки отправки формы */}
						<ButtonFormAuth type="submit">Вперёд</ButtonFormAuth>
						{/* конец кнопки отправки формы */}
					</form>
				</div>
			</div>
			{/* конец форма входа */}
		</div>

	)

}

export default Autorisation;