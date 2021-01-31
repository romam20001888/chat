import React from 'react';
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

export const userAuth = () => 
{
    console.log(AsyncStorage.getItem("userId")) 
}
export const saveUserAuth = (id,name,login,email,phone) => 
{
    
}