import React from 'react';
import {Flex, Text} from '@mantine/core'
import {
	DiscordCurlInfo,
	DiscordCurl,
	DiscordToken,
	DiscordTokenInfo,
	DiscordChanelUpload,
	DiscordChanelUploadInfo
} from "4-widgets/settings";
import {DeletePromt} from "../../../4-widgets/settings/ui/deletePromt/deletePromt";

export const SettingsPage = () => {
	return (
		<Flex direction={'column'} gap={20} p={20}>
			<Text size={26} weight={'bold'}>
				Настройки
			</Text>

			<Flex direction={"column"} w={'50%'} gap={20}>
				<Text>Настройка скачивания с определенного канала</Text>
				<Flex direction={"column"}>
					<DiscordChanelUploadInfo />
					<DiscordChanelUpload />
				</Flex>
			</Flex>

			<Flex direction={"column"} w={'50%'} gap={20}>
				<Text>Настройка авторизации для Discord & Bot</Text>
				<Flex direction={"column"}>
					<DiscordTokenInfo />
					<DiscordToken />
				</Flex>
				<Flex direction={"column"} gap={10}>
					<DiscordCurlInfo/>
					<DiscordCurl />
				</Flex>
			</Flex>

			<Flex direction={"column"} w={'50%'} gap={20}>
				<Text>Удаление промта</Text>
				<Flex direction={"column"}>
					<DeletePromt/>
				</Flex>
			</Flex>
		</Flex>
	);
};
