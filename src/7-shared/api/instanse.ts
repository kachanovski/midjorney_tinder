import axios from "axios";
import {JWTToken} from "../lib/jwtToken";

export const instance = axios.create({
	withCredentials: false,
	baseURL: "http://109.172.83.22/api",
});

export const discordInstance = axios.create({
	withCredentials: false,
	baseURL: "https://discord.com/api",
});

instance.interceptors.request.use(
	(config) => {
		config.headers.Authorization = `${JWTToken.getAccess()}`;
		return config;
	},
	(error) => Promise.reject(error)
);

discordInstance.interceptors.request.use(
	(config) => {
		config.headers.Authorization = `${JWTToken.getAccessDiscord()}`;
		return config;
	},
	(error) => Promise.reject(error)
);
