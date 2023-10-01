import React, {ChangeEvent, useState} from 'react';
import {Button, Flex, TextInput} from "@mantine/core";

import {JWTToken} from "7-shared/lib/jwtToken";

export const DiscordToken = () => {
	const [value, setValue] = useState<string>('')

	const [isEditMode, setIsEditMode] = useState<boolean>(false)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onClickBtn = () => {
		isEditMode
		? saveToken()
			: changeMode()
	}

	const saveToken = () => {
		setIsEditMode(false)
		JWTToken.setAccessDiscord(value)
	}

	const changeMode = () => {
		setValue(JWTToken.getAccessDiscord() ?? "")
		setIsEditMode(true)
	}

	return (
		<Flex gap={10} align={'end'}>
			{
				isEditMode
				? <TextInput
						placeholder="Discord токен"
						label="Discord токен"
						value={value}
						onChange={onChangeHandler}
					/>
					: <TextInput
						disabled
						placeholder="Discord токен"
						label="Discord токен"
						value={JWTToken.getAccessDiscord() ?? ""}
						onChange={onChangeHandler}
					/>
			}

			<Button color={isEditMode ? 'green' : 'orange'} onClick={onClickBtn}>
				{isEditMode ? 'Сохранить' : 'Изменить'}
			</Button>

		</Flex>
	);
};
