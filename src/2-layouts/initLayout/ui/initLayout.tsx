import {useEffect} from "react";
import {Outlet, useNavigate} from 'react-router-dom'

import {selectIsAuth} from "6-entities/user";
import {useAppDispatch, useAppSelector} from "7-shared/hooks";
import {PATH_PAGE} from "7-shared/lib/router";

import {getMeThunk} from "../model/getMe";

export const InitLayout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  useEffect(() => {
    if(!isAuth){
      dispatch(getMeThunk())
    }
  },[isAuth, dispatch])

  useEffect(() => {
    if (isAuth) {
      navigate(PATH_PAGE.root)
    }
    if(!isAuth){
      navigate(PATH_PAGE.login)
    }
  }, [isAuth, navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}
