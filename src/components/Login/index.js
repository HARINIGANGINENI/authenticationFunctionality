import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

const Login = props => {
  const JwtToken = Cookies.get('jwt_token')
  if (JwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookiesAndNavigateToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      setCookiesAndNavigateToHome(fetchedData.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="heading">Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with sample Creds
      </button>
    </div>
  )
}

export default Login
