import React from 'react';
import {Burger, Group, Header} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Link} from "react-router-dom";

import {PATH_PAGE} from "7-shared/lib/router";

import {useStyles} from "./styles";
import {links} from "../model/links";

export const AppHeader = () => {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes } = useStyles();

	const items = links.map((link) => (
		<Link
			key={link.label}
			to={link.link}
			className={classes.link}
		>
			{link.label}
		</Link>
	));

	return (
		<Header height={56} className={classes.header} mb={20}>
			<div className={classes.inner}>
				<Group>
					<Link
						to={PATH_PAGE.root}
						className={classes.link}
					>
						Main
					</Link>
				</Group>

				<Group>
					<Group ml={50} spacing={5} className={classes.links}>
						{items}
					</Group>
					<Burger opened={opened} onClick={toggle} size="sm" />
				</Group>
			</div>
		</Header>
	);
};
