import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {AppHeader} from "4-widgets/appHeader";
import {getDiscordMessagesThunk} from "5-features/discordMessages";
import {useAppDispatch} from "7-shared/hooks";

export const AppLayout = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDiscordMessagesThunk())
  },[])

  return (
    <div>
      <AppHeader/>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
