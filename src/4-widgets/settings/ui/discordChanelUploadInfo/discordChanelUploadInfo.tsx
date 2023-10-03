import React from 'react';
import {Accordion, Anchor, Image, Text} from "@mantine/core";
import chanel_id from "./chanel_id.png";

export const DiscordChanelUploadInfo = () => {
	return (
		<Accordion variant="separated">
			<Accordion.Item value="info">
				<Accordion.Control>Где взять?</Accordion.Control>
				<Accordion.Panel>
					<Text>
						1 - Необходимо зайти на канал
							<Anchor href="https://discord.com/channels/662267976984297473/@home" ml={10} target="_blank">
								Midjorney
							</Anchor>
					</Text>
					<Text>
						2 - Зайти в интересующий канал
					</Text>
					<Text>
						3 - Скопировать id канала и вставить в поле ниже
					</Text>
					<Image width={600} src={chanel_id} />
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};
