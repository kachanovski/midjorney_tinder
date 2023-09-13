import React from 'react';
import {useForm} from "@mantine/form";
import {Button, Flex, PasswordInput, TextInput} from "@mantine/core";

import {ILoginForm} from "6-entities/auth";
import {useAppDispatch} from "7-shared/hooks";

import {loginThunk} from "../model/login";

export const LoginForm = () => {
	const dispatch = useAppDispatch()
	const form = useForm<ILoginForm>({
		initialValues: {
			email: 'test@gmail.com',
			password: '1234',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	const onSubmitHandler = (data: ILoginForm) => {
		dispatch(loginThunk(data))
	}

	return (
		<form onSubmit={form.onSubmit(onSubmitHandler)}>
			<Flex direction={'column'} gap={20}>
				<TextInput label="Email" placeholder="Your email" required {...form.getInputProps('email')}/>
				<PasswordInput label="Password" placeholder="Your password" required {...form.getInputProps('password')} />
				<Button w={'100%'} type="submit">Submit</Button>
			</Flex>
		</form>
	);
};
