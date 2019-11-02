import React from 'react';
import { createStackNavigator } from 'react-navigation';

/* =========pages=========== */
import Login from '../pages/Login';
import Home from '../pages/Home';
/* ========================= */

const MainStack = createStackNavigator(
    {
        Login : {
            screen : Login
        } ,

        Home : {
            screen : Home
        }
    } ,
    {
        headerMode : 'none'
    }
)

export default MainStack