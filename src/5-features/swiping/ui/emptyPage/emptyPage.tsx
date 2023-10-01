import React from 'react';
import {Button, Flex, Text} from "@mantine/core";
import {useAppDispatch} from "7-shared/hooks";

import {getDiscordMessagesThunk} from "../../../discordMessages";

export const EmptyPage = () => {
	const dispatch = useAppDispatch()

	const upload = () => {
		dispatch(getDiscordMessagesThunk())
	}

	return (
		<Flex h={'80vh'} align={"center"} direction={'column'} gap={20}>
			<Text align={"center"}>Изображения закончились</Text>
			<Text align={"center"}>Загрузить еще?</Text>
			<Button w={'max-content'} onClick={upload}>
				Загрузить
			</Button>
		</Flex>
	);
};
