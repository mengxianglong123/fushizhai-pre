import { StyleSheet, Text, View,ScrollView,PermissionsAndroid, Platform } from 'react-native';
import React,{useEffect, useRef,useState} from 'react';
import ViewShot,{ captureRef } from "react-native-view-shot";
import {Button,Toast,Provider} from '@ant-design/react-native'
import {WebView} from "react-native-webview";
import theme from '../../config/theme'
import CameraRoll from "@react-native-community/cameraroll";
import Spinner from 'react-native-loading-spinner-overlay';
import RNFS from 'react-native-fs'
/**
 * 检查读权限
 * @returns 
 */
async function hasAndroidReadPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    
    const status = await PermissionsAndroid.request(permission);
    console.log(status)
    if(status != "granted") Toast.info("权限不足，保存失败！")
    return status === 'granted';
}

/**
 * 检查写权限
 * @returns 
 */
async function hasAndroidWritePermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    
    const status = await PermissionsAndroid.request(permission);
    console.log(status)
    if(status != "granted") Toast.info("权限不足，保存失败！")
    return status === 'granted';
  }
 
  
  

export default function Result({route}) {
    // 控制加载窗口
    const [spinner,setSpinner] = useState(false)
    // 创建截屏ref
    const shot = useRef()
    // 解析参数
    const {title,content,author} = route.params
    // 处理正文内容
    let contents = content.split(/[,。，？！、]/)

    /**
     * 保存
     * @returns 
     */
    async function savePicture(uri) {
        if (Platform.OS === "android" && !(await  hasAndroidWritePermission())) {
        return;
        }
        if (Platform.OS === "android" && !(await  hasAndroidReadPermission())) {
            return;
        }
        CameraRoll.save(uri).then(res => {
             // 关闭窗口
             setSpinner(false)
             // 提示保存成功
             Toast.info("保存成功")
        })
    };

    // 处理保存
    function save(){
        // 开启加载窗口
        setSpinner(true)
        shot.current.capture().then(uri => {
			// 保存至相册
            savePicture(uri)
		})
    }
    
    return (
        <Provider>
            <ScrollView style={styles.result}>
                {/* 加载窗口 */}
                <Spinner
                    visible={spinner}
                    textContent={'保存中'}
                    textStyle={{color:"#fff"}}
                />
                <ScrollView horizontal={true} 
                            style={styles.scroll} showsHorizontalScrollIndicator={false}>
                    {/* 截屏区域 */}
                    <ViewShot ref={shot}>
                        <View style={styles.panel}>
                            <View style={styles.card} >
                                {/* 标题 */}
                                {
                                    title !== "" ? <View style={styles.cardItemView}><Text style={[styles.cardItem,styles.title]}>{title}</Text></View> : null
                                }
                                

                                {/* 正文 */}
                                {
                                    contents.map((content,index) => <View style={styles.cardItemView} key={index}><Text style={[styles.cardItem,styles.content]}>{content}</Text></View>)
                                }
                                
                                {/* 1个空行 */}
                                <View style={styles.cardItemView}><Text style={[styles.cardItem,styles.content]}></Text></View>
                                {/* 作者 */}
                                {
                                    author != "" ? <View style={[styles.cardItemView,styles.author]}><Text style={[styles.cardItem]}>{author}</Text></View> : null
                                }

                                
                            </View>
                        </View>
                        
                    </ViewShot>
                
                </ScrollView> 

                {/* 保存按钮 */}
                <View style={{
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Button type='primary' 
                                onPress={save}
                                activeStyle={{backgroundColor:theme.shade}}
                                style={styles.submit}>保存</Button>
                </View>



            </ScrollView>
        </Provider>
        
    );
}

const styles = StyleSheet.create({
    // 结果页面
    result:{
        // width:"100%",
        // height:"100%"
    },
    scroll:{
       
    },
    // 面板
    panel:{
        padding:10,
        backgroundColor:"white",
        margin:15
    },
    // 最终卡片效果
    card:{
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
        minHeight:400,
        borderWidth:2,
        //borderColor:"#BB4455"
        borderColor:theme.color
    },
    cardItemView:{
        borderWidth:1,
        //borderColor:"#BB4455",
        borderColor:theme.color,
        borderBottomWidth:1,
        padding:10,
        paddingHorizontal:15,
        height:"100%",
        
        justifyContent:"center",
        alignItems:'center'
    },
    // 卡片文字通用样式
    cardItem:{
        fontSize:22,
        width:22,
        fontFamily:"quantang",
        textAlign:"center",
        color:"#333333"
    },
    // 作者
    author:{
        height:"100%",
        justifyContent:"flex-end"
    },
    // 标题
    title:{
        fontWeight:"500"
    },
    // 提交按钮样式
    submit:{
        backgroundColor:theme.tint,
        width:"70%",
        marginTop:15,
        marginHorizontal:"auto",
        elevation:0,
        borderWidth:0
    },


    overTest:{
        width:"100%",
        minHeight:300,
        overflow:"scroll",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    overTestItem:{
        with:20,
        
    },
    overText:{
        fontSize:20,
        width:20
    }
});
