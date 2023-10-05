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
		</Flex>
	);
};
