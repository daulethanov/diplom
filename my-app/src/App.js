import './App.css';
import React from 'react';
import Home from './pages/Home';
import Autorisation from './pages/Autorisation';
import PrivatRoute from './utils/router/PrivateRoute';
import Admin from './pages/Admin';
import Bookmarks from './pages/Bookmarks';
import Univer from './pages/Univer';
import Registr from './pages/Registr';
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

				<Route path="admin" element={<Admin></Admin>}></Route>
			</Route>
			{/* главная */}
			<Route path="/" element={<Home></Home>}></Route>
			{/* админка */}
			{/* начало ждоступно без регистрации */}
			{/* вход */}
			<Route path="autorisation" element={<Autorisation></Autorisation>}></Route>
			{/* регистрация */}
			<Route path="registr" element={<Registr></Registr>}></Route>
			{/* первая главная страница */}
			<Route path='firstHome' element={<FirstHome></FirstHome>}></Route>
			{/* конец ждоступно без регистрации */}
		</Routes>


	);
}

export default App;
