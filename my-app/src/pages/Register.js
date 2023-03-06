import React, { useState  } from "react";
import './css/registr.css'
import InputFormAuth from "../components/input/Input";
import { NavLink } from "react-router-dom";
import ButtonFormAuth from "../components/button/buttonForm/ButtonForm";
import axios from 'axios'

function Register() {

	// начало состояния email и пароля
	const [name, setFirstName] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPasswordRec] = useState('');
	// конец состояния email и пароля

	// начало показать пароль
	const [showPassword, setShowPassword] = useState(false)
	const [showPasswordRec, setShowPasswordRec] = useState(false)
	// конец показать пароль

	// начало функция для отправки дынных на сервер
	const handleSubmit = async (e) => {
		e.preventDefault();
            try {
      const response = await axios.post("http://localhost:5000/api/v1/auth/register", {
        name,
        email,
        password,
        password2
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
	}
	// конец функция для отправки дынных на сервер



	return (

		<div className="registr">
			{/* начало левая картинка */}
			<div className="form__registr__right">
				<img className="form__registr__right__img" src="img/formAuth/form__fon__left.jpg" alt="foto" />
				<div className="form__registr__right__opacity "></div>
			</div>
			{/* конец левая картинка */}
			{/* начало форма регистрации */}
			<div className="form__registr__left">
				<img className="form__registr__left__img" src="img/formAuth/form__fon__right.jpg" alt="foto"></img>
				<div className="form__registr__left__content">
					<h2>Higher.kz</h2>
					<h3>Твоё образование в твоих руках</h3>
					<h2>Регистрация</h2>
					{/* начало формы регистрации */}
					<form onSubmit={handleSubmit}>
						{/* начало поле имени */}
						<InputFormAuth
							type="text"
							placeholder="Ваше имя"
							value={name}
							onChange={(e) => setFirstName(e.target.value)}
						></InputFormAuth>
						{/* конец поле имени */}
						{/* начало поле email */}
						<InputFormAuth
							type="email"
							placeholder="Почта"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></InputFormAuth>
						{/* конец поле email */}
						{/* начало поле пароль */}
						<InputFormAuth

							type={showPassword ? 'text' : 'password'}
							placeholder="Пароль"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onMouseOver={() => setShowPassword(true)}
							onMouseOut={() => setShowPassword(false)}
						></InputFormAuth>
						{/* конец поле пароль */}
						{/* начало поле повторите пароль */}
						<InputFormAuth
							type={showPasswordRec ? 'text' : 'password'}
							placeholder="Повторите пароль"
							value={password2}
							onChange={(e) => setPasswordRec(e.target.value)}
							onMouseOver={() => setShowPasswordRec(true)}
							onMouseOut={() => setShowPasswordRec(false)}
						></InputFormAuth>
						{/* коней поле повторите пароль */}
						{/* конец формы регистрации */}
						<h4 id="link__registr">У меня уже есть аккаунт для <NavLink to='/autorisation'>входа</NavLink>  </h4>
						{/* начало кнопки отправки формы */}
						<ButtonFormAuth type="submit">Вперёд</ButtonFormAuth>
						{/* конец кнопки отправки формы */}

					</form>

				</div>
			</div>
			{/* конец форма регистрации */}
		</div>

	)

}

export default Register;