import React from 'react';
import {Burger, Button, Drawer, Flex, Group, Header, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Link, useNavigate} from "react-router-dom";

import {startGenerateThunk, stopGenerateThunk} from "5-features/discordMessages";
import {logoutThunk} from "5-features/logout";
import {selectUploadLimit, selectUser} from "6-entities/user";
import {selectPromtsAllCount, selectPromtsWithImageCount} from "6-entities/promts";
import {PATH_PAGE} from "7-shared/lib/router";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";

import {useStyles} from "./styles";
import {links} from "../model/links";

export const AppHeader = () => {
	const navigate = useNavigate()
	const [opened, { toggle, close }] = useDisclosure(false);
	const { classes } = useStyles();
	const dispatch = useAppDispatch()
	const user = useAppSelector(selectUser)

	const uploadCount = useAppSelector(selectUploadLimit)
	const allCount = useAppSelector(selectPromtsAllCount)
	const withImageCount = useAppSelector(selectPromtsWithImageCount)

	const items = links.map((link) => (
		<Link
			onClick={close}
			key={link.label}
			to={link.link}
			className={classes.link}
		>
			{link.label}
		</Link>
	));

	const startGenerate = () => {
		user?.is_start_generate
			? dispatch(stopGenerateThunk())
			: dispatch(startGenerateThunk())
	}

	const logout = () => {
		dispatch(logoutThunk())
		navigate(PATH_PAGE.login)
	}

	return (
		<Header height={56} className={classes.header} mb={20}>
			<div className={classes.inner}>
				<Group>
					<Link
						to={PATH_PAGE.root}
						className={classes.link}
					>
						Главная
					</Link>
				</Group>
				<Button onClick={startGenerate} color={user?.is_start_generate ? 'red' : 'green'}>
					{user?.is_start_generate ? "Остановить" : "Начать"}
				</Button>
				<Group>
					<Burger opened={opened} onClick={toggle} size="sm" />

					<Drawer h={'100%'} opened={opened} position={"right"} onClose={close} title="Меню">
						<Flex h={'90vh'} direction={'column'} justify={'space-between'}>
							<Flex h={'100%'} direction={'column'} gap={10}>
								{items}
							</Flex>
							<Flex direction={'column'}>
								<Text>
									{`Всего: ${allCount}`}
								</Text>
								<Text>
									{`Обработано: ${withImageCount}`}
								</Text>
							</Flex>
							<Flex direction={'column'}>
								<Text>
									{`Лимит: ${uploadCount}/1000`}
								</Text>
							</Flex>

							<Button color={'red'} onClick={logout}>
								Выйти
							</Button>
						</Flex>
					</Drawer>

				</Group>
			</div>
		</Header>
	);
};
