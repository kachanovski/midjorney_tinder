export const messageContentSlicer = (data: string) => {
	const start = data.indexOf('**')
	const end = data.lastIndexOf('**')
	return data.slice(start + 2, end)
}
