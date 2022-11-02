import React, {  useState } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, TextInput, StyleSheet,ImageBackground } from  'react-native';
import { useNavigation } from '@react-navigation/native';
import {AuthContext } from '../../contexts/AuthContext';
import { StackPromsList } from '../../Routes/app.routes';
import  { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../../services/api';

export default function DashBoard(){
  const navigation = useNavigation<NativeStackNavigationProp<StackPromsList>>();

  const  [ number, setNumber ] = useState('');
  
  async function openOrder(){
   if( number === ''){
    return;
   }
      const response = await api.post('/order',{
        table: Number (number)

      })

      //console.log(response.data);

   //prefisa fazer a requisicao e abrir a mesa e navegar pra proxima tela.

   navigation.navigate('Order', {number: number, order_id: response.data.id })

   setNumber('');

  }

    return(
        <SafeAreaView style={styles.container}>

<ImageBackground
        source={require('../../assets/background3.jpg')}
        resizeMode='cover'
        style={{flex:1, height:780, width:400}}>

        </ImageBackground>

            <Text style={styles.title}> New Order </Text>

       <TextInput
       placeholder= "Table number"
       placeholderTextColor="#F0F0F0"
       style={styles.input}
       keyboardType= "numeric"
       value={number}
       onChangeText={setNumber}
       />

     <TouchableOpacity  style={styles.button} onPress={ openOrder } >
       <Text style={styles.buttonText}> Open Table</Text>
     </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
     
        backgroundColor: '#1d1d2e',
        
    },
    title: {
        fontSize: 38,
        fontWeigth: 'bold',
        color: '#fff',
        marginBottom:20
        
      

    },
    input:{
        width: '90%',
        height: 60,
        backgroundColor: '#101026',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize:25,
        color: '#FFF',
        marginBottom:20
    },
    button:{
        width: '65%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:320
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  }

})