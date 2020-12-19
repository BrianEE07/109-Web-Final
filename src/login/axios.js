import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/users' })

const checkUser = async ({account, password}) => {
  const { data : msg } = await instance.post('/users', {account, password})

  return msg
}

export default checkUser