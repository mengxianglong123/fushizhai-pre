import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React,{useState,useEffect} from 'react';
import Swiper from 'react-native-deck-swiper'
import Card from '../Card/Card';
import  GetSentences  from '../../../../request/request';
import { Provider, Toast } from '@ant-design/react-native';
export default function CardSwiper() {
    const [poems,setPoems] = useState([])
    const [index,setIndex] = useState(0)
    
    /**
     * 更新诗句
     */
    function updatePoems(){
        GetSentences({num:3}).then(res => {
            let datas = res.data.list.map(data => ({content:data.content,author:data.poet.name}))
            setPoems([...poems,...datas])
            setIndex(index+1)
        }, e => Toast(e))
    }

    useEffect(() => {
        // 挂载时请求诗词数据
        updatePoems()
    }, []);
    // 长度为0时，暂时不要渲染，传入空数组会导致永远不会滑完
    if(poems.length === 0 || !poems[index]){
        return (<View style={{flex:1,alignItems:"center",justifyContent:"center"}}><Text>加载中</Text></View>)
    }
    return (
       
             <View style={styles.swiper}>
            
               
                    <Swiper style={styles.swiperItem}
                        
                        key={Date.now()}
                        renderCard= {card =>  <Card poem={card}/>}
                        backgroundColor={"transparent"}
                        cardHorizontalMargin={0}
                        cardVerticalMargin={0}
                        cardStyle={{width:320,height:500,}}
                        containerStyle={{justifyContent:"center",alignItems:"center",with:320,height:500}}
                        infinite={true}
                        stackSeparation={0}
                        // 滑完就更新
                        onSwiped={updatePoems}
                        cardIndex={index}
                        stackSize= {3}
                        cards={poems} >

                    </Swiper> 
            
            
            </View>
       
       
    );
}

const styles = StyleSheet.create({
    
    swiper:{
        justifyContent:"center",
        alignItems:"center",
        width:320,
        height:500,
       // backgroundColor:"red"
    },
    swiperItem:{
        alignItems:"center",
        justifyContent:"center",
        width:320,
        height:500
    }
});
