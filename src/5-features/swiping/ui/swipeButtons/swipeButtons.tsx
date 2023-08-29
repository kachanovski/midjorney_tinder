import React from 'react';
import {Button, Flex} from "@mantine/core";

import {useAppDispatch} from "7-shared/hooks";
import {ReactComponent as DislikeIcon} from '7-shared/assets/icon/dislike.svg'
import {ReactComponent as LikeIcon} from '7-shared/assets/icon/like.svg'

import {getDiscordMessagesThunk} from "../../../discordMessages";

export const SwipeButtons = () => {
	const dispatch = useAppDispatch()


	const onClickLikeHandler = () => {
		dispatch(getDiscordMessagesThunk())
	}

	return (
		<Flex gap={20} w={'100%'} justify={"center"}>
			<Button leftIcon={<DislikeIcon />} color="red" radius="md" size="md">
				Dislike
			</Button>
			<Button onClick={onClickLikeHandler} leftIcon={<LikeIcon />} color="teal" radius="md" size="md">
				Like
			</Button>
		</Flex>
	);
};
