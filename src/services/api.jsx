import client from "../apolloClient";
import { gql } from "@apollo/client";
export const API = {
	register: "https://mohammed390.pythonanywhere.com/api/register/",
	login: "https://mohammed390.pythonanywhere.com/api/login/",
};
// src/services/api.js

const GET_PRODUCTS = gql`
	query MyQuery {
		products {
			id
			name
			price
			description
			categories {
				name
			}
			images {
				url
			}
			brand
		}
	}
`;

export const fetchProductsFromHygraph = async () => {
	const response = await client.query({ query: GET_PRODUCTS });
	return response.data.products;
};
