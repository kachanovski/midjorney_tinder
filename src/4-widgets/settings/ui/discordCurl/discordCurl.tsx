import React from 'react';
import {useAppDispatch} from "7-shared/hooks";
import {uploadFileThunk} from "../../model/uploadCurl";
import {Button, FileButton} from "@mantine/core";

export const DiscordCurl = () => {
	const dispatch = useAppDispatch()

	const upload = (file: File) => {
		const fd = new FormData()
		fd.append('file', file)
		dispatch(uploadFileThunk(fd))
	}

	return (
			<FileButton onChange={upload}>
				{(props) => <Button {...props}>Загрузить файл(curl)</Button>}
			</FileButton>
	);
};
