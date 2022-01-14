import React, {Component}  from "react";
import {View, Text, StyleSheet, Button} from "react-native";


export default class LosePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <View style={styles.body}>
                <Text style={{top:50,left:20}}>
                    lose
                </Text>
                <Button title='Try again'
                    onPress={()=>{
                        this.props.navigation.navigate('Game Page 1')
                    }}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    body:{
        backgroundColor:'#fff',
        flex:1
    },
    listWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomWidth:1,
        position:'relative',
        height:45,
        width:'100%',
        alignItems:'center'
    },
    firstRow:{
        backgroundColor: '#fff',
        flex:1,
        fontSize:13,
        maxWidth:'40%',
        height:'100%',
        textAlign:'center',
        lineHeight:40
    },
    secondRow:{
        backgroundColor: '#fff',
        flex:1,
        fontSize:13,
        maxWidth:'30%',
        textAlign:'center'
    },
    thirdRow:{
        backgroundColor: '#fff',
        flex:1,
        fontSize:13,
        maxWidth:'29%',
        textAlign:'center',
    },
    firstHeader:{
        fontWeight: 'bold',
        backgroundColor: '#fff',
        flex:1,
        fontSize:13,
        maxWidth:'40%',
        height:'100%',
        textAlign:'center',
        lineHeight:40
    },
    secondHeader:{
        fontWeight: 'bold',
        backgroundColor: '#fff',
        flex:1,
        fontSize:13,
        maxWidth:'30%',
        textAlign:'center'
    },
    thirdHeader:{
        fontWeight: 'bold',
        backgroundColor: '#fff',
        flex:1,
        fontSize:13,
        maxWidth:'29%',
        textAlign:'center',
    },
})


