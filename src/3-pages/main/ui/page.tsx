import React, {useEffect, useRef} from 'react';
import {Button, Flex} from "@mantine/core";

import {CurrentImage, EmptyPage, getPromtsThunk, SwipeButtons} from "5-features/swiping";
import {selectPromt} from "6-entities/promts";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";
import {CSVLink} from "react-csv";

export const MainPage = () => {
	const dispatch = useAppDispatch()
	const promt = useAppSelector(selectPromt)

	useEffect(() => {
		dispatch(getPromtsThunk())
	},[dispatch])

	if(!promt){
		return <EmptyPage />
	}

	return (
		<Flex direction={"column"} gap={20}>
			<CurrentImage />

			<SwipeButtons />
		</Flex>
	);
};
