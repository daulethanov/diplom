import { Navigate, Outlet } from "react-router-dom"

function PrivatRoute() {

	const auth = false

	return (
		auth ? <Outlet></Outlet> : <Navigate to="firstHome"></Navigate>
	)

}

export default PrivatRoute