import './App.css';
import React from 'react';
import Autorisation from './pages/Autorisation';
import PrivatRoute from './utils/router/PrivateRoute';
import Admin from './pages/Admin';
import Bookmarks from './pages/Bookmarks';
import Univer from './pages/Univer';
import Register from './pages/Register';
import FirstHome from './pages/First';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {



	return (

		<Routes>
			<Route element={<PrivatRoute></PrivatRoute>}>
				{/* закладки */}
				<Route path="bookmarks" element={<Bookmarks></Bookmarks>}></Route>
				{/* страница универа */}
				<Route path="univer" element={<Univer></Univer>}></Route>

				<Route path="admin" element={<Admin />}></Route>
			</Route>
			{/* главная */}
			<Route path="/" element={<FirstHome />}></Route>
			{/* админка */}
			{/* начало ждоступно без регистрации */}
			{/* вход */}
			<Route path="/login" element={<Autorisation />}></Route>
			{/* регистрация */}
			<Route path="/register" element={<Register />}></Route>
			{/* первая главная страница */}
			<Route path='/' element={<FirstHome></FirstHome>}></Route>
			{/* конец ждоступно без регистрации */}
		</Routes>


	);
}

export default App;
