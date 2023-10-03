import React, {ChangeEvent, useState} from 'react';
import {Button, Flex, TextInput} from "@mantine/core";

export const DiscordChanelUpload = () => {
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

	const onClickByDefaultBtn = () => {
		setValue(localStorage.getItem('discord_chanel_id') ?? '')
		localStorage.setItem('discord_chanel_id', '')
	}

	const saveToken = () => {
		setIsEditMode(false)
		localStorage.setItem('discord_chanel_id',value)
	}

	const changeMode = () => {
		setValue(localStorage.getItem('discord_chanel_id') ?? "")
		setIsEditMode(true)
	}

	return (
		<Flex gap={10} align={'end'}>
			{
				isEditMode
					? <TextInput
						placeholder="Id Канала"
						label="Id Канала"
						value={value}
						onChange={onChangeHandler}
					/>
					: <TextInput
						disabled
						placeholder="Id Канала"
						label="Id Канала"
						value={localStorage.getItem('discord_chanel_id') ?? ""}
						onChange={onChangeHandler}
					/>
			}

			<Button color={isEditMode ? 'green' : 'orange'} onClick={onClickBtn}>
				{isEditMode ? 'Сохранить' : 'Изменить'}
			</Button>

			<Button onClick={onClickByDefaultBtn}>
				Вернуть по дефолту
			</Button>

		</Flex>
	);
};
