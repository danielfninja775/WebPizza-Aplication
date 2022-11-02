import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

interface itemProps  {
  data:{  id: string;
    product_id: string;
    name: string;
    amount: string | number;
  }
  deleteItem: (item_id:string) =>void;
}

export function ListItem({data, deleteItem}:itemProps){

    function handleDeleteItem(){
        deleteItem(data.id)
    }
    return(
        <View style={styles.container}>
            <Text style ={styles.item}>{data.amount} - {data.name}</Text>

            <TouchableOpacity onPress={handleDeleteItem}>
            <Icon name="trash-2" size={25} color= "#FF3F4b" />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#101026',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom:12,
        paddingVertical: 12,
        borderRadius:4,
        paddingHorizontal:12,
        borderWidth: 0.3,
        borderColor: '#8a8a8a'
    },
    item:{
        color: '#FFF'
    }
})