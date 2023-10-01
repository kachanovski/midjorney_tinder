export interface RequestSetPromtsBody {
	upload_count: number
}

export interface RequestPromtsBody {
	data: {
		id: number
		discord_id: string
		value: string
		image: string
	}
	count: number
	all_count: number
}
