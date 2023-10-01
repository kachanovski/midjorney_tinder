import React from 'react';
import {Accordion, Anchor, Image, Text} from "@mantine/core";
import info from './requestInfo.png'

export const DiscordTokenInfo = () => {
	return (
		<Accordion variant="separated">
			<Accordion.Item value="info">
				<Accordion.Control>Где взять?</Accordion.Control>
				<Accordion.Panel>
					<Text>
						1 - Необходимо авторизоваться в веб версии на платформе
							<Anchor href="https://discord.com/" ml={10} target="_blank">
								Discord
							</Anchor>
					</Text>
					<Text>
						2 - Необходимо открыть консоль разработчика(F12), вкладка сеть(network)
					</Text>
					<Text>
						3 - Открыть один из запросов на домен "discord.com"
					</Text>
					<Text>
						4 - Скопировать в данное поле токен(Authorization)
					</Text>
					<Image width={600} src={info} />
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};
