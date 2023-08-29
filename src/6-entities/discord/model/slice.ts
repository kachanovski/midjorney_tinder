import {createSlice} from '@reduxjs/toolkit'

import {IDiscordMessage} from "./types";

interface IAuthSlice {
	messages: IDiscordMessage[]
}

const initialState: IAuthSlice = {
	messages: [],
}

export const discordSlice = createSlice({
	name: 'discord',
	initialState,
	reducers: {
		setDiscordMessages: (state, action) => {
			state.messages = action.payload;
		},
	},
})

export const { setDiscordMessages } = discordSlice.actions;

export const selectDiscordMessages= (state: RootState):IDiscordMessage[] => state.discord.messages
