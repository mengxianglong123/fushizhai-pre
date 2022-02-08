import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Poem from '../pages/Poem/Poem'
import Create from '../pages/Create/Create'
import theme from '../config/theme';

const Tab = createBottomTabNavigator();

/**
 * 获取Tab路由配置
 * @param {*} route 
 */
function getOptions(route){
    

    // 返回配置对象
    return {
        // 图标配置
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name == 'poem') {
                // 根据是否选中返回不同颜色的图标
                return focused ? 
                <Text style={{fontFamily:"iconfont",fontSize:18,color:theme.color}}>{"\ue7a7"}</Text> :
                 <Text style={{fontFamily:"iconfont",fontSize:18}}>{"\ue7a7"}</Text>
            } else if (route.name == 'create') {
                // 
                return  focused ? 
                <Text style={{fontFamily:"iconfont",fontSize:18,color:theme.color}}>{"\ue607"}</Text> : 
                <Text style={{fontFamily:"iconfont",fontSize:18}}>{"\ue607"}</Text>
            }

          },
          // tabbar文字颜色配置
          tabBarActiveTintColor: theme.color,
          tabBarInactiveTintColor: 'gray',
          // header相关配置
          headerTitleAlign:"center",
          headerShadowVisible:false,
          headerTitleStyle:{
              fontSize:16
          }
          
    }
}

/**
 * Tab路由组件
 */
export default function TabRoutes() {
  return (
        <Tab.Navigator screenOptions={({route}) => getOptions(route)} >
            {/* 诗斋 */}
            <Tab.Screen name="poem" options={{tabBarLabel: '诗斋',title:"诗斋"}}  component={Poem} />
            {/* 创作 */}
            <Tab.Screen name="create" options={{tabBarLabel: '创作',title:"创作"}} component={Create} />
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
