import React from 'react';
import {Button, Flex} from "@mantine/core";
import {selectPromt} from "6-entities/promts";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";
import {ReactComponent as DislikeIcon} from '7-shared/assets/icon/dislike.svg'
import {ReactComponent as LikeIcon} from '7-shared/assets/icon/like.svg'

import {likePromtThunk} from "../../model/likePromt";
import {dislikePromtThunk} from "../../model/dislikePromt";
import axios from "axios";
import { mkConfig, generateCsv, download } from "export-to-csv";

export const SwipeButtons = () => {
	const dispatch = useAppDispatch()
	const promt = useAppSelector(selectPromt)

	const generateActica = async (image: string, name: string) => {
		const requestData = {
			tkn: 'FA944CB5-748A-48E8-8DDB-F83547F1C46D57A88F31-C997-4FCE-B215-0689515347C4',  // visit https://astica.ai
			modelVersion: '2.1_full', // 1.0_full, 2.0_full, or 2.1_full
			input: image,
			visionParams: 'describe', // comma separated, defaults to all
		};

		axios({
			method: 'post',
			url: 'https://vision.astica.ai/describe',
			data: requestData,
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			const data = [
				{
					Filename: `${response.data.caption.text}.png`,
					Title: response.data.caption.text,
					Description: '',
					Keywords: ''
				},
			];
			const csvConfig = mkConfig({ filename: response.data.caption.text.slice(0,85), useKeysAsHeaders: true });
			const csv = generateCsv(csvConfig)(data);
			download(csvConfig)(csv)
			downloadImage(image, response.data.caption.text)
		}).catch((error) => {
			console.log(error);
		});
	}

	const onClickLikeHandler = async () => {
		dispatch(likePromtThunk(promt.id))
		if(promt?.image){
			generateActica(promt.image, promt.value)
		}
	}

	const onClickDislikeHandler = () => {
		dispatch(dislikePromtThunk(promt.id))
	}

	const downloadImage = async (url: string, name: string) => {
		const a = document.createElement("a");
		a.href = await toDataURL(url);
		a.download = `${name.slice(0,85)}.png`;
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
