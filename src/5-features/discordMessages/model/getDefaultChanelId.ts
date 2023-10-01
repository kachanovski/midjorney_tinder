import {UploadLimit} from "7-shared/lib/uploadLimit";

export const getDefaultChanelId = () => {
	const limit = UploadLimit.getCurrentValue().limit
	if(limit<=50) {
		return '933565701162168371'
	}
	if(limit<=100) {
		return '941971306004504638'
	}
	if(limit<=150) {
		return '981832774157762570'
	}
	if(limit<=200) {
		return '984632424610824222'
	}
	if(limit<=250) {
		return '984632500875821066'
	}
	if(limit<=300) {
		return '984632520471633920'
	}if(limit<=350) {
		return '989274712590917653'
	}
	if(limit<=400) {
		return '989274728155992124'
	}
	if(limit<=450) {
		return '989274745495240734'
	}
	if(limit<=500) {
		return '989274756341706822'
	}
	if(limit<=550) {
		return '933565701162168371'
	}
	if(limit<=600) {
		return '941971306004504638'
	}
	if(limit<=650) {
		return '981832774157762570'
	}
	if(limit<=700) {
		return '984632424610824222'
	}
	if(limit<=750) {
		return '984632500875821066'
	}
	if(limit<=800) {
		return '984632520471633920'
	}if(limit<=850) {
		return '989274712590917653'
	}
	if(limit<=900) {
		return '989274728155992124'
	}
	if(limit<=950) {
		return '989274745495240734'
	}
	if(limit<=1000) {
		return '989274756341706822'
	}
	return '941582479117127680'
}
