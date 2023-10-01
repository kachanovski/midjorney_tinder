import React, {useEffect} from 'react';
import {Flex} from '@mantine/core';

import {CurrentImage, SwipeButtons} from "5-features/swiping";
import {useAppDispatch} from "../../../7-shared/hooks";
import {getPromtsThunk} from "../../../5-features/swiping/model/getPromts";

export const SwipingPage = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPromtsThunk())
	},[])


	return (
		<Flex direction={"column"} gap={20}>
			<CurrentImage />
			<SwipeButtons />
		</Flex>
	);
};
