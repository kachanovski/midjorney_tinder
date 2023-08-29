import React from 'react';
import {Flex} from '@mantine/core';

import {CurrentImage, SwipeButtons} from "5-features/swiping";

export const SwipingPage = () => {
	return (
		<Flex direction={"column"} gap={20}>
			<CurrentImage />
			<SwipeButtons />
		</Flex>
	);
};
