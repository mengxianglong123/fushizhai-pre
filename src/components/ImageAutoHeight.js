import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types'

//图片自适应高度
export default class ImageAutoHeight extends React.PureComponent{

    constructor(props){
        super(props)


    }

    static propTypes = {

        source:PropTypes.any,
        width:PropTypes.number,
        style:PropTypes.object,
        setHeight:PropTypes.func
    }

    state = {
        imageH:100,

    };


    componentDidMount(){



        if(this.props.source.uri){
            // 网络图片
            Image.getSize(this.props.source,(width, height)=>{

                this.setState({
                    imageH:this.props.width * height / width
                })
            })
        }else{
            // 本地图片
            const result =  Image.resolveAssetSource(this.props.source)
            let height = result.height
            let width = result.width
            const finalHeight = this.props.width * height / width
            this.setState({
                imageH:finalHeight
            })
            this.props.setHeight && this.props.setHeight(finalHeight)
        }

    }

    render(){

        return (
            <Image
                style={[this.props.style,{height:this.state.imageH,width:this.props.width}]}
                source={this.props.source}
            />
        );
    }
}