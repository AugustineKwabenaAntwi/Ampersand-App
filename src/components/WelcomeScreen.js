import React from 'react'
import { View ,Text,StyleSheet,Image} from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style ={styles.container}>
            <View style ={styles.logocontainer}>
                <Image style={styles.logo} source={require("../../assets/Images/LogoAmp.png")}/>
            </View>
            <View style ={styles.textcontainer}>
                <Text style = {styles.title}>AMPERSAND</Text>
                <Text style = {styles.title}> CONTACTS</Text>
            </View>
            <View style ={styles.textcontainer}>
                <Text numberOfLines={2} style  =  {styles.startText}>GET STARTED</Text>
            </View>
        </View>
    )
}
const styles =  StyleSheet.create({
container:{
    backgroundColor:"#ede6e3",
    width:'100%',
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"space-around"
},
logo:{
    width:200,
    height:50},
title:{
    fontSize:25
},
startText:{
    fontSize:20,
    borderBottomWidth:5,
    borderColor:"brown"
}
})
