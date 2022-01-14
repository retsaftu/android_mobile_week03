import React, {Component}  from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let radio_props = [
    {label: '1', value: 0 },
    {label: '2', value: 1 },
    {label: '3', value: 2 },
    {label: '4', value: 3 },
  ];

export default class GamePage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:0
        }
    }

    render() {
        return(
            <View style={styles.body}>
                <Text>2+2=?</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                />
                <Button title="Submit"
                    onPress={()=>{
                        if(this.state.value===3){
                            this.props.navigation.navigate('Game Page 2')
                        }else{
                            this.props.navigation.navigate('Game Lose')
                        }
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


