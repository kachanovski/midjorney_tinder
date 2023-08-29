import React from 'react';
import {Flex, Image, Text} from "@mantine/core";

import {selectDiscordMessages} from "6-entities/discord";
import {useAppSelector} from "7-shared/hooks";

import {messageContentSlicer} from "../../model/messageContentSlicer";

export const CurrentImage = () => {
	const messages = useAppSelector(selectDiscordMessages)

	return (
		<Flex h={'80vh'} direction={'column'} gap={20}>
			<Text align={"center"}>{messages.map(i => messageContentSlicer(i.content))}</Text>
			{messages?.map(i => i.attachments?.map(image => <Image key={image.content_type} maw={400} mx="auto" src={image.url} alt="Random image" />))}
		</Flex>
	);
};
