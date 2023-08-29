import {useEffect} from "react";
import {Outlet, useNavigate} from 'react-router-dom'

import {selectIsAuth} from "6-entities/auth";
import {useAppSelector} from "7-shared/hooks";
import {PATH_PAGE} from "7-shared/lib/router";

export const AuthLayout = () => {
  const navigate = useNavigate()

  const isAuth = useAppSelector(selectIsAuth)

  useEffect(() => {
    if (isAuth) {
      navigate(PATH_PAGE.root)
    }
  }, [isAuth, navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}
