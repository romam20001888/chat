import React from 'react';
import axios from "axios"


export const dbSelect = (tableName) => {
    var url = 'http://mobile.twcompany.ru/connect/select.php'
      axios.get(url,{
        params: {
          tableName
        }
      })
      .then(res => { 
        console.log(res.data)
      }) 
      .catch(err => { 
        if (err.response) {
            return(err.response)
        } 
        else if (err.request) 
        { 
            return(err.request)
        } 
        else 
        { 
            return(errt)
        } 
      })
    }
    
    export const dbAddUser = (Login,password,name,email,phone,tableName) => {
      var url = 'http://mobile.twcompany.ru/connect/add.php'
        axios.get(url,{
          params: {
            Login,password,name,email,phone,tableName
          }
        })
        .then(res => { 
            return(res.data)
        }) 
        .catch(err => { 
            if (err.response) {
                return(err.response)
            } 
            else if (err.request) 
            { 
                return(err.request)
            } 
            else 
            { 
                return(errt)
            } 
        })
      }


      export const authHor = (login,password) => {
        var stase=false
        var url = 'http://mobile.twcompany.ru/connect/auth.php'
        return axios.get(url,{
            params: {
              login,password
            }
          })
          .then(res => { 
            if(res.data.length!=0){
              return res.data;
            }else{
              return false;
            }
          }) 
          .catch(err => { 
            console.log(err)
          })
        }