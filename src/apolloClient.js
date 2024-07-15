// src/apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://api-eu-west-2.hygraph.com/v2/clyj16iwc03oa08v07ekujzth/master", // replace with your actual GraphQL endpoint URL
	cache: new InMemoryCache(),
});

export default client;
