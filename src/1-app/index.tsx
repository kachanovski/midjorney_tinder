import { Provider as ReduxProvider } from 'react-redux'
import { MantineProvider } from '@mantine/core';
import {Notifications} from "@mantine/notifications";
import { RouterProvider } from 'react-router-dom'

import {router} from "./routes";
import {store} from "./store/store";

export const App = () => {
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
					<ReduxProvider store={store}>
						<Notifications />
						<RouterProvider router={router} />
					</ReduxProvider>
		</MantineProvider>
	);
};
