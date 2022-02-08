import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Poem from '../pages/Poem/Poem';
import Create from '../pages/Create/Create';
import theme from '../config/theme';

export default function Tabbar() {

    const [selectedTab,setSelectedTab] = useState("poem")

    return (
        <TabNavigator style={styles.container}>
            
            <TabNavigator.Item
                selected={selectedTab === 'poem'}
                title="诗斋"
                renderIcon={() => <Text style={{fontFamily:"iconfont",fontSize:18}}>{"\ue7a7"}</Text>}
                renderSelectedIcon={() => <Text style={{fontFamily:"iconfont",fontSize:18,color:theme.color}}>{"\ue7a7"}</Text> }
                onPress={() => setSelectedTab("poem")}>
                <Poem/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'create'}
                title="创作"
                renderIcon={() => <Text style={{fontFamily:"iconfont",fontSize:18}}>{"\ue607"}</Text>}
                renderSelectedIcon={() => <Text style={{fontFamily:"iconfont",fontSize:18,color:theme.color}}>{"\ue607"}</Text> }
                onPress={() => setSelectedTab("create")}>
                <Create/>
            </TabNavigator.Item>
        </TabNavigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
});
