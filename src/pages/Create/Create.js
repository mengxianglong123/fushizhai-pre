import { StyleSheet ,ScrollView, View } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Button, InputItem, List ,TextareaItem,Toast,Provider} from '@ant-design/react-native';
import theme from '../../config/theme'


export default function Create({ navigation }) {
    // 标题
    const [title,setTitle] = useState("")
    // 正文
    const [content,setContent] = useState("")
    // 署名
    const [author,setAuthor] = useState("")
    
    // 提交
    function submit(){
        if(content == "") {
            // 正文不可为空
            Toast.info('正文不可为空');
            return
        }
        // 跳转
        navigation.push('result', {
            title,
            content,
            author
          })
    }
    return (
        <Provider>
             <ScrollView>
                <List>
                    <InputItem style={[styles.input]} value={title} onChange={setTitle} placeholder='标题(可选)'/>
                    <TextareaItem style={{height:140}} value={content} onChange={setContent} autoHeight={true} placeholder='正文(请以逗号、句号、问号或感叹号为分隔符，系统会自动识别)'/>
                    <InputItem style={[styles.input]} value={author} onChange={setAuthor} placeholder='署名(可选)'/>
                </List>
                <View style={{width:"100%",alignItems:"center"}}>
                    <Button type='primary' 
                            onPress={submit}
                            activeStyle={{backgroundColor:theme.shade}}
                            style={styles.submit}>完成创作</Button>
                </View>
                
            </ScrollView>
        </Provider>
       
    );
}

const styles = StyleSheet.create({
    // 输入框样式
    input:{
        //height:140
    },
    // 提交按钮样式
    submit:{
        backgroundColor:theme.tint,
        width:"70%",
        marginTop:15,
        marginHorizontal:"auto",
        elevation:0,
        borderWidth:0
    }
});
