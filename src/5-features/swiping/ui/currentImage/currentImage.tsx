import React from 'react';
import {Flex, Text} from "@mantine/core";

import {selectPromt} from "6-entities/promts";
import {useAppSelector} from "7-shared/hooks";

export const CurrentImage = () => {
	const promt = useAppSelector(selectPromt)

	return (
		<Flex h={'80vh'} direction={'column'} gap={20}>
			<Text align={"center"}>{promt?.value}</Text>
			<Flex align={'center'} justify={'center'}>
				{!!promt?.image && <img style={{height: 'auto', maxHeight:'60vh', width: 'auto'}} src={promt?.image} alt={''}/>}
			</Flex>
		</Flex>
	);
};
