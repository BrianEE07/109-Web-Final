import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/chickens' })

const eat = async ({name, hunger, updateTime}) => {
  const { data : msg } = await instance.post('/updateHunger', {name, hunger, updateTime})

  return msg
}
const getShot = async ({name, hp, updateTime}) => {
    const { data : msg } = await instance.post('/updateHP', {name, hp, updateTime})
  
    return msg
  }

const createChick = async ({name, hp, hunger, createTime}) => {
    hp = 0
    hunger = 0
    // createTime = new Date().getTime()
    const { data : msg } = await instance.post('/createChicken', {name, hp, hunger, createTime})

  return msg
}
export { createChick, eat }