import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
	const isLogin = useSelector((state) => state.loginState.value); // Adjust the selector to match your Redux state
	return isLogin ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
