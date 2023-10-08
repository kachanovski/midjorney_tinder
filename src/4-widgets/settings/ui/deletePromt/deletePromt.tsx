import React, {useState} from 'react';
import {Button, Flex, Textarea} from "@mantine/core";
import {useAppDispatch} from "../../../../7-shared/hooks";
import {deletePromtThunk} from "../../model/deletePromt";

export const DeletePromt = () => {
	const dispatch = useAppDispatch()

	const [value, setValue] = useState('')

	const deleteHandler = () => {
		dispatch(deletePromtThunk(value))
		setValue(value)
	}

	return (
		<Flex gap={20} direction={"column"}>
			<Textarea value={value} onChange={(e) => setValue(e.target.value)}/>
			<Button onClick={deleteHandler}>
				Удалить промт
			</Button>
			</Flex>
	);
};
