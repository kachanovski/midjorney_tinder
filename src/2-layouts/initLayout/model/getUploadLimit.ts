import {UploadLimit} from "7-shared/lib/uploadLimit";

export const getUploadLimit = () => {
	const currentValue = UploadLimit.getCurrentValue()
	const currentTime = new Date().getTime()
	const day = 86400000

	const different = currentTime - currentValue.time

	if(different > day){
		UploadLimit.setUploadLimit({
			limit: 1000,
			time: new Date().getTime()
		})
		return 1000
	}

	return currentValue.limit
}
