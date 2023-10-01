import React from 'react';
import {Flex, Image, Text} from "@mantine/core";

import {selectPromt} from "6-entities/promts";
import {useAppSelector} from "7-shared/hooks";

export const CurrentImage = () => {
	const promt = useAppSelector(selectPromt)

	return (
		<Flex h={'80vh'} direction={'column'} gap={20}>
			<Text align={"center"}>{promt?.value}</Text>
			<Image maw={300} mx="auto" src={promt?.image} alt="Random image" />)
		</Flex>
	);
};
