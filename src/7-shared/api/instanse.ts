import axios from "axios";
import {JWTToken} from "../lib/jwtToken";

export const instance = axios.create({
	withCredentials: false,
	baseURL: "http://localhost:8000/api",
});

export const discordInstance = axios.create({
	withCredentials: true,
	baseURL: "https://discord.com/api",
	headers: {
		Authorization: 'NjczNTc5ODU1MjQ5NjcwMTQ5.GBFMla.Qmfm4UpA5fqk2OIes6Te-ySOdqkRB0ePWEUgKs'
	}
});

instance.interceptors.request.use(
	(config) => {
		config.headers.Authorization = `${JWTToken.getAccess()}`;
		return config;
	},
	(error) => Promise.reject(error)
);
