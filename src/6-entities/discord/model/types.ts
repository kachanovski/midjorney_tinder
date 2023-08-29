export interface IDiscordMessage {
	attachments: IDiscordMessageAttachments[]
	channel_id: string
	content: string
	id: string
}

export interface IDiscordMessageAttachments {
	proxy_url: string
	content_type: string
	filename: string
	url: string
}

