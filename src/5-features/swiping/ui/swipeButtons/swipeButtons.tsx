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
		if(promt?.image){
			download(promt.image, promt.value)
		}
	}

	const onClickDislikeHandler = () => {
		dispatch(dislikePromtThunk(promt.id))
	}

	const download = async (url: string, name: string) => {
		const a = document.createElement("a");
		a.href = await toDataURL(url);
		a.download = name;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	function toDataURL(url: string) {
		return fetch(url)
			.then((response) => {
				return response.blob();
			})
			.then((blob) => {
				return URL.createObjectURL(blob);
			});
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
