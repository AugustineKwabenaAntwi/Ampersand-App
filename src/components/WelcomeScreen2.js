import React from 'react'
import { Image, View ,Text,StyleSheet} from 'react-native'

export default function WelcomeScreen2() {
    return (
        <View>
            <View style={styles.Imagebox}>
                <Image style={styles.image} source={require("../../assets/Images/welcome-screen-image.jpg")}/>
            </View>
            <View style={{marginVertical:15,justifyContent:'center',marginHorizontal:15}}>
                <Text style={{fontSize:18}}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
            </View>
            <View  style={{justifyContent:'center',marginHorizontal:15}}>
                <Text style={{color:"gray"}}>Sign in or register with your Ampersand email</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:50,marginTop:80}} >
                <Text style={styles.registerText}>REGISTER</Text>
                <Text style={styles.registerText}>SIGN IN</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    Imagebox:{
        height:"70%",
        width:"100%",
    },
    image:{
        width:"100%",
        height:"100%"
    },
    registerText:{
        fontSize:16,
        borderBottomWidth:3,
        borderColor:"brown"
    },
})
