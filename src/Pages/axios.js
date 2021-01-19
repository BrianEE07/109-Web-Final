import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/users' })

const checkUser = async ({account, password}) => {
  const { data : msg } = await instance.post('/login', {account, password})

  return msg
}

const signUp = async ({email, account, password, chicken}) => {
  const { data : msg } = await instance.post('/signup', {email, account, password, chicken})

  return msg
}
export { checkUser, signUp }