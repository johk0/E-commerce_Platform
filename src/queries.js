// src/queries.js
import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
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
		}
	}
`;
