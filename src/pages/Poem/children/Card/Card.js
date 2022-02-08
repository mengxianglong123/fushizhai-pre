import { StyleSheet, Text, View,Image } from 'react-native';
import React,{useEffect,useState} from 'react';
import ImageAutoHeight from '../../../../components/ImageAutoHeight';
import {BoxShadow} from 'react-native-shadow'


// 阴影效果配置
const shadowOpt = {
    width:300,
    height:300,
    color:"#000",
    radius:3,
    opacity:0.2,
  
}
export default function Card({poem}) {
    const [content,setContent] = useState([])
    useEffect(() => {
        // 处理正文内容
        let sentences = poem.content.split(/[,。，？！、]/)
        setContent(sentences)
    }, []);
    
    return ( 
            <View style={styles.card}>
            {/* 左下角透明图 */}
            <ImageAutoHeight
            width={125}
            source={require("../../../../assets/he.png")} style={styles.image}  />
            {/* 作者 */}
            <Text style={styles.author}>|{poem.author}</Text>
            {/* 正文 */}
            <View style={styles.content}>
                {
                    content.map((data,index) => <Text key={index} style={styles.contentItem}>{data}</Text>)
                }
                {/* <Text style={styles.contentItem}>晴翠接荒城</Text>
                <Text style={styles.contentItem}>又送王孙去</Text>
                <Text style={styles.contentItem}>萋萋满别情</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxSahdow:{
        // height:200
        marginTop:30
    },
    // 卡片整体样式
    card:{
        position:"relative",
        width:320,
        height:500,
        backgroundColor:"white",
        borderRadius:7,
        overflow:"hidden",
        flexDirection:"row",
        justifyContent:"flex-end",
        padding:10,
    },
    // 图片
    image:{
       position:"absolute",
       left:-10,
       bottom:0
    },
    // 正文
    content:{
        flexDirection:"row-reverse",
        height:"100%",
        
    },
    //每一行的样式
    contentItem:{
        fontSize:22,
        width:22,
        marginRight:10,
        height:"100%",
        lineHeight:30,
        fontFamily:"quantang",
        color:"#333333"
    },
    // 作者样式
    author:{
        fontFamily:"quantang",
        fontSize:15,
        width:15,
        textAlign:"center",
        position:"absolute",
        bottom:10,
        left:6,
        color:"#333333"
    }
});
