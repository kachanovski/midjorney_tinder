import {Container, Paper, Title,} from '@mantine/core';

import {LoginForm} from "5-features/login";

export const LoginPage = () => {
	return (
		<Container size={420} my={40}>
			<Title align="center">
				Welcome back!
			</Title>
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<LoginForm />
			</Paper>
		</Container>
	);
};
