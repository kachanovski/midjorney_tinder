import React from 'react';
import {Accordion, Anchor, Image, Text} from "@mantine/core";
import curl from './curl.png'
import network from './network.png'

export const DiscordCurlInfo = () => {
	return (
		<Accordion variant="separated">
			<Accordion.Item value="info">
				<Accordion.Control>Где взять?</Accordion.Control>
				<Accordion.Panel>
					<Text weight={700}>
						ВАЖНО!!! Текстовый файл должен иметь расширение .txt
					</Text>
					<Text>
						1 - Необходимо авторизоваться в веб версии на платформе
							<Anchor href="https://discord.com/" ml={10} target="_blank">
								Discord
							</Anchor>
					</Text>
					<Text>
						2 - Необходимо открыть консоль разработчика(F12), вкладка сеть(network)
						<Image width={600} src={network} />
					</Text>
					<Text>
						3 - Открыть чат с ботом Midjorney
					</Text>
					<Text>
						4 - Написать команду боту "/settings"
					</Text>
					<Text>
						5 - Найти запрос с название interactions
					</Text>
					<Text>
						6 - Скопировать в найденном запросе curl
					</Text>
					<Image width={600} src={curl} />
					<Text>
						7 - Создать текстовый файл и вставить в него скопированное значение
					</Text>
					<Text>
						8 - Загрузить файл
					</Text>
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};
