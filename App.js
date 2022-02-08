import { StyleSheet, Text, View,PermissionsAndroid } from 'react-native';
import React,{useEffect} from 'react';
import Routes from './src/components/Routes';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
async function  requestExternalStoragePermission(){
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'My App Storage Permission',
                message: 'My App needs access to your storage ' +
                    'so you can save your photos',
            },
        );
        return granted;
    } catch (err) {
        console.error('Failed to request permission ', err);
        return null;
    }
};
export default function App() {
    useEffect(() => {
        // 申请权限
        requestExternalStoragePermission()
        // 3s关闭启动图
        setTimeout(() => {
            SplashScreen.hide()
        },3000)
        
    }, []);
    
  return (
    <View style={{flex:1}}>
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({});
