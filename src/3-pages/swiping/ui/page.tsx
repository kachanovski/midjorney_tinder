import React, {useEffect} from 'react';
import {Flex} from '@mantine/core';

import {getPromtsThunk, CurrentImage, SwipeButtons} from "5-features/swiping";
import {useAppDispatch} from "7-shared/hooks";

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
