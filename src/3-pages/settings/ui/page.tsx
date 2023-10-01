import React from 'react';
import {Flex, Text} from '@mantine/core'
import {DiscordCurlInfo, DiscordCurl, DiscordToken, DiscordTokenInfo} from "4-widgets/settings";

export const SettingsPage = () => {
	return (
		<Flex direction={'column'} gap={20} p={20}>
			<Text size={26} weight={'bold'}>
				Настройки
			</Text>
			<Flex direction={"column"} w={'50%'} gap={20}>
				<Flex direction={"column"}>
					<DiscordTokenInfo />
					<DiscordToken />
				</Flex>
				<Flex direction={"column"} gap={10}>
					<DiscordCurlInfo/>
					<DiscordCurl />
				</Flex>
			</Flex>
		</Flex>
	);
};
