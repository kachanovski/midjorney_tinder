import { isRouteErrorResponse, useRouteError } from 'react-router-dom'


export const RouteErrorBoundary = () => {
  const error = useRouteError()
  return <>{isRouteErrorResponse(error) && error.data?.message}</>
}
