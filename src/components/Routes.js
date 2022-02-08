import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack'
import TabRoutes from './TabRoutes';
import Tabbar from './Tabbar';
import Result from '../pages/Result/Result';
const Stack = createNativeStackNavigator();
// 路由配置
export default function Routes({navigation}) {
  return (
    //   只需要一个container
    <NavigationContainer>

        <Stack.Navigator screenOptions={{
            animation:"slide_from_right", // 指定转场动画模式
            // header相关配置
            headerTitleAlign:"center",
            headerShadowVisible:false,
            headerTitleStyle:{
                fontSize:16
            }
            }
            }>
            {/* tab页面 */}
            <Stack.Screen options={{header:() => {}}} name="tab" component={TabRoutes} />
            {/* 创作结果页面 */}
            <Stack.Screen  name="result" options={{title:"创作"}} component={Result} />
        </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
