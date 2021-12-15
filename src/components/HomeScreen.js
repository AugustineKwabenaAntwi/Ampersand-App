import React from 'react'
import { View ,Text,StyleSheet, Image, TouchableOpacity} from 'react-native'

export default function HomeScreen() {
    return (
        <>
        <View style ={styles.container}>
            <View>
                <Text style= {{fontWeight:"900",fontSize:18,marginVertical:20}}>Exchange Contact Information</Text>
                <Text style={{color:"gray",fontSize:16}}>Scan this QR below to share your contacts</Text>
            </View>
            <View>
                <Image style={{alignSelf:'center',width:350,height:350}}source={require("../../assets/Images/QR.jpg")}/>
            </View>
            <View style={{flexDirection:"row",alignItems:'center',marginTop:50}}>
                <Image style={{width:50,height:50,borderRadius:100,marginRight:15}} source={require("../../assets/Images/profile01.jpg")}/>
                <View >
                    <Text style={{fontSize:18}}>Joan Shay</Text>
                    <Text style={{fontSize:15,color:"gray"}}>Head of Marketing</Text>
                </View>
            </View>
        </View>
            {/* <View style={styles.footer}>
                <Text>Want to add a new contact?</Text>
                <TouchableOpacity style={{borderWidth:2,alignItems:'center',height:30,width:120,justifyContent:'center',borderColor:"darkred"}}>
                    <Text style={{color:"darkred"}}>Scan QR</Text>
                </TouchableOpacity>
            </View> */}
        </>
        
    )
}
const styles=StyleSheet.create({
    container:{
        marginTop:100,
        marginHorizontal:40
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"white",
        width:"100%",
        height:70,
        position:"absolute",top:150,left:0,right:0,
        marginHorizontal:40
    }
})
