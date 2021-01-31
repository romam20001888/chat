import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity,View,TextInput } from 'react-native';
import { authHor } from '../server/connect';

export default function Auth({ navigation }) {
    


    var login=""
    var password=""
    function setLogin(text){
        login=text
    }
    function setPassword(text){
        password=text
    }
    function sendValues(){
        var bilder = authHor(login,password)

        bilder.then(
            result => {
                if(result!=false){  
                    navigation.navigate('Maine',
                    {
                        text: result[0].id, 
                        name: result[0].name, 
                    } 
                    
                    )
                    alert(result[0].name)
                }
            }
          )
    }  
        
   

    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <Text style={styles.authText}>Авторизация</Text>
                <TextInput 
                    onChangeText={text => setLogin(text)}
                    placeholder="Логин" 
                    style={styles.authInput}
                />
                <TextInput 
                     onChangeText={text => setPassword(text)}
                    placeholder="Пароль"
                    style={styles.authInput}
                />
                <TouchableOpacity
                style={styles.authContentButton}
                onPress={sendValues}
                >
                    <View>
                        <Text style={styles.authContentText}>Войти</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Maine', { name: 'Jane' })
                }
                >
                    <View>
                        <Text>Регистрация</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282828',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerMain: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20
      },
      authContentButton: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00d627',
          paddingHorizontal:7,
          paddingVertical:4,
          borderRadius:15,
          marginBottom:10
        },
      authInput: {
          fontSize:19,
          marginVertical:10
        },
      authText: {
            fontSize:30,
            fontWeight:"700",
            marginBottom:10
        },
        authContentText: {
            color:"white",
              fontSize:20,
              fontWeight:"500",
          },
  });