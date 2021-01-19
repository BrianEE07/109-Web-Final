import React from "react";
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import NotFound from '../Pages/PageNotFound/PageNotFound'
import Game from '../game'


const routes =[
    {
      path:'/login',
      component: Login,
      isPrivate: false
    },
    {
      path:'/signup',
      component: SignUp,
      isPrivate: false
    },
    {
      path:'/game',
      component: Game,
      isPrivate: true
    },
    {
      path:'/*',
      component: NotFound,
      isPrivate: true
    }
  ]
   
  export default routes
