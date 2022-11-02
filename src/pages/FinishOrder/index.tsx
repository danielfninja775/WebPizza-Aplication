import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute, RouteProp  } from '@react-navigation/native'
import {api} from '../../services/api'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../Routes/app.routes'


type RouteDetailParams = {
    FinishOrder:{
        number: string | number;
        order_id: string;
    }

}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder(){
    const route = useRoute<FinishOrderRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();


           async function handleFinish(){
          try{
            await api.put('/order/send', {
                order_id: route.params?.order_id
            })

            navigation.popToTop();

         }catch(err){
            console.log("Error, try later")
         }
        }


    return(
        <View style={styles.container}>

            <Text style={styles.alert}> Are the order complete ?</Text>
            <Text style={styles.title}>
                Table {route.params?.number}
                </Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}>Finish Order</Text>
            <Icon name="shopping-cart" size={28} color= "#FF3F4b" />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
flex:1,
backgroundColor: '#1d1d2e',
paddingVertical: '5%',
paddingHorizontal:'4%',
alignItems: 'center',
justifyContent: 'center'
},
alert:{
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 12,
},
title:{
    fontSize: 30,
    fontWeigth: 'bold',
    color: '#FFF',
    marginBotton: 12,
},
button:{
    backgroundColor: '#3fffa3',
    flexDirection: 'row',
    width:'65%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 15
},
textButton:{
    fontSize:18,
    marginRight: 8,
    fontWeight: 'bold',
    color: '#1d1d2e'
}
})