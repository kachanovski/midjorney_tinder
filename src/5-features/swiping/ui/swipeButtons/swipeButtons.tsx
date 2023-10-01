import React from 'react';
import {Button, Flex} from "@mantine/core";

import {selectPromt} from "6-entities/promts";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";
import {ReactComponent as DislikeIcon} from '7-shared/assets/icon/dislike.svg'
import {ReactComponent as LikeIcon} from '7-shared/assets/icon/like.svg'

import {likePromtThunk} from "../../model/likePromt";
import {dislikePromtThunk} from "../../model/dislikePromt";

export const SwipeButtons = () => {
	const dispatch = useAppDispatch()
	const promt = useAppSelector(selectPromt)

	const onClickLikeHandler = () => {
		dispatch(likePromtThunk(promt.id))
	}

	const onClickDislikeHandler = () => {
		dispatch(dislikePromtThunk(promt.id))
	}

	return (
		<Flex gap={20} w={'100%'} justify={"center"}>
			<Button onClick={onClickDislikeHandler} leftIcon={<DislikeIcon />} color="red" radius="md" size="md">
				Dislike
			</Button>
			<Button onClick={onClickLikeHandler} leftIcon={<LikeIcon />} color="teal" radius="md" size="md">
				Like
			</Button>
		</Flex>
	);
};
