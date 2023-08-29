import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";

import {AppHeader} from "4-widgets/appHeader";
import {getDiscordMessagesThunk} from "5-features/discordMessages";
import {selectIsAuth} from "6-entities/auth";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";
import {PATH_PAGE} from "7-shared/lib/router";

export const AppLayout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  useEffect(() => {
    dispatch(getDiscordMessagesThunk())
  },[])

  useEffect(() => {
    if (!isAuth) {
      navigate(PATH_PAGE.login)
    }
  }, [isAuth, navigate])

  return (
    <div>
      <AppHeader/>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
