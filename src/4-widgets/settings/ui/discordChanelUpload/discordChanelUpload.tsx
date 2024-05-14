import React, {ChangeEvent, useState} from 'react';
import {Button, Flex, TextInput} from "@mantine/core";

import {getDiscordMessagesThunk} from "5-features/discordMessages";
import {useAppDispatch} from "7-shared/hooks";

export const DiscordChanelUpload = () => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState<string>('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onClickBtn = () => {
		if(value){
			dispatch(getDiscordMessagesThunk({id: value}))
		}
	}

	const onClickUploadAll = async () => {
		await dispatch(getDiscordMessagesThunk({id: '933565701162168371'}))
		await dispatch(getDiscordMessagesThunk({id: '941971306004504638'}))
		await dispatch(getDiscordMessagesThunk({id: '981832774157762570'}))
		await dispatch(getDiscordMessagesThunk({id: '984632424610824222'}))
		await dispatch(getDiscordMessagesThunk({id: '984632500875821066'}))
		await dispatch(getDiscordMessagesThunk({id: '984632520471633920'}))
		await dispatch(getDiscordMessagesThunk({id: '989274712590917653'}))
		await dispatch(getDiscordMessagesThunk({id: '989274728155992124'}))
		await dispatch(getDiscordMessagesThunk({id: '989274745495240734'}))
		await dispatch(getDiscordMessagesThunk({id: '941582479117127680'}))
		await dispatch(getDiscordMessagesThunk({id: '995431151084773486'}))
		await dispatch(getDiscordMessagesThunk({id: '995431172375064616'}))
		await dispatch(getDiscordMessagesThunk({id: '995431233121161246'}))
		await dispatch(getDiscordMessagesThunk({id: '995431473828077618'}))
		await dispatch(getDiscordMessagesThunk({id: '995431514080813086'}))
		await dispatch(getDiscordMessagesThunk({id: '995431544019755070'}))
		await dispatch(getDiscordMessagesThunk({id: '995431387333152778'}))
		await dispatch(getDiscordMessagesThunk({id: '995431305066065950'}))
		await dispatch(getDiscordMessagesThunk({id: '995431274267279440'}))
	}

	return (
		<Flex gap={10} align={'end'}>
				<TextInput
						placeholder="Id Канала"
						label="Id Канала"
						value={value}
						onChange={onChangeHandler}
				/>

				<Button color={'green'} onClick={onClickBtn}>
					Загрузить
				</Button>
				<Button color={'orange'} onClick={onClickUploadAll}>
					Загрузить все
				</Button>
		</Flex>
	);
};
