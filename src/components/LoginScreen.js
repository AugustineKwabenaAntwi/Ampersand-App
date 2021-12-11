import React from 'react'
import { View ,Image,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'

export default function LoginScreen() {
    // const[Email,setEmail] 
    // const[Password,setPassword]
    return (
        <View style ={styles.container} >
            <View style={styles.imagebox}>
                <Image style ={styles.image} source={require('../../assets/Images/Login-Image-2.jpg')}/>
            </View>
            <View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
                    <Text>
                        Email
                    </Text>
                    <TextInput label ="email" textAlign='right' placeholder='joan.shay@sparrow.com'/>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
                    <Text>
                        Password
                    </Text>
                    <TextInput  secureTextEntry={true} label ="email" textAlign='right' placeholder='.....'/>
                </View>
            </View>
            <TouchableOpacity >
                <Text>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Forgot</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Reset Password</Text>
            </TouchableOpacity> 
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:50
    },
    imagebox:{
        height:"60%",
        width:"100%",
        elevation:8
    },
    image:{
        width:'100%',
        height:"100%"
    }
})
