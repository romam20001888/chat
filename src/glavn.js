import * as React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity,View,TextInput } from 'react-native';

export default function Glavn({ route, navigation }) {
    const { text,name } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.containerHead}>
                <Text style={styles.authText}>{text}{name}</Text>
                
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.authText}>{text}{name}</Text>
            </View>
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    },
    containerHead: {
        alignItems: 'center',
        backgroundColor: '#282828',
        paddingHorizontal:20,
        paddingVertical:30,
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