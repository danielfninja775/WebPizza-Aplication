import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions, ScrollView, ImageBackground } from 'react-native'
import { CategoryProps } from '../../pages/Order';

interface ModalPickerProps{
    options: CategoryProps[];
    handleCloseModal:() => void;
    selectedItem: (item: CategoryProps) => void;
}

const {width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export function ModalPicker({ options, handleCloseModal, selectedItem } : ModalPickerProps){


    function onPressItem(item: CategoryProps){
       // console.log(item);

       selectedItem(item);
       handleCloseModal();
    }

    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
          <Text style= {styles.item}>
            {item?.name}
          </Text>
       </TouchableOpacity>
    )) 

    return(

        <TouchableOpacity style={styles.container} onPress={handleCloseModal} >
      
            <View style={styles.content}>

            <ImageBackground
        source={require('../../assets/background6.jpg')}
        resizeMode='cover'
        style={{flex:1, width: WIDTH -30, height: HEIGHT /2, borderRadius: 5}}>
          </ImageBackground>

          <ScrollView showsVerticalScrollIndicator={false}>
              {option}
            </ScrollView>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        width: WIDTH -30,
        height: HEIGHT /2,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 5,
     
    
    },
    option:{
        alignItems: 'flex-start',

      
    },
    item:{
        margin:12,
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 140,
     
     
    }
})