import React from 'react';
import {useForm} from "@mantine/form";
import {Button, Flex, PasswordInput, TextInput, Text} from "@mantine/core";

import {ILoginForm, selectAuthError} from "6-entities/user";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";

import {loginThunk} from "../model/login";

export const LoginForm = () => {
	const dispatch = useAppDispatch()
	const authError = useAppSelector(selectAuthError)

	const form = useForm<ILoginForm>({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Некорректный email'),
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
				<Text color={'red'}>{authError}</Text>
				<Button w={'100%'} type="submit">Submit</Button>
			</Flex>
		</form>
	);
};
