import { StyleSheet, Text, View,StatusBar ,Button,ScrollView} from 'react-native';
import React from 'react';
import Card from './children/Card/Card';
import CardSwiper from './children/CardSwiper/CardSwiper';
import { Provider, Toast } from '@ant-design/react-native';
export default function Poem({ navigation }) {
  return (
      <Provider>
           <View style={styles.poem}>
                <StatusBar backgroundColor={"white"} barStyle='dark-content'/>
                {/* 卡片 */}
                <CardSwiper/>
            </View>
      </Provider>
   
  );
}

const styles = StyleSheet.create({
    poem:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"blue"
    }
});
