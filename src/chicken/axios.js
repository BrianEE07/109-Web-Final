import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/chickens' })

const eat = async ({account, hunger, health, message}) => {
  console.log(account, hunger, health, message)
  const { data : msg } = await instance.post('/updateHunger', {account, hunger, health, message})
  console.log("msg", msg)
  return msg
}
const loveMore = async ({name, happiness, updateTime}) => {
  const { data : msg } = await instance.post('/updateHappiness', {name, happiness, updateTime})

  return msg
}
const lifelong = async ({name, hp, updateTime}) => {
  const { data : msg } = await instance.post('/updateHealth', {name, hp, updateTime})

  return msg
}


const createChick = async ({account, name}) => {
    console.log(window.localStorage.getItem("account"))
  //  if(m)
    const health = 100
    const happiness = 100
    const hunger = 90
    const createTime = new Date().getTime()
    const lifeTime = 0
    const stage = 0
    console.log("this is", account, name)
    const { data : msg } = await instance.post('/createChicken', {account, name, health, happiness, hunger, createTime, lifeTime, stage})
    console.log("axios", msg)
  return msg
}
const getUser = async () => {
  const account = window.localStorage.getItem("account")
//  if(m)
  // const hp = 100
  // const happiness = 100
  // const hunger = 100
  // const createTime = new Date().getTime()
  // const lifeTime = 0
  // const stage = 0

  const { data : msg } = await instance.post('/getUser', {account})
  console.log("axios", msg)

return msg
}
export { createChick, eat , lifelong, loveMore, getUser}