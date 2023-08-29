import axios from "axios";

export const instance = axios.create({
	withCredentials: true,
	baseURL: "/",
});

export const discordInstance = axios.create({
	withCredentials: true,
	baseURL: "https://discord.com/api",
	headers: {
		Authorization: 'NjczNTc5ODU1MjQ5NjcwMTQ5.GBFMla.Qmfm4UpA5fqk2OIes6Te-ySOdqkRB0ePWEUgKs'
	}
});
