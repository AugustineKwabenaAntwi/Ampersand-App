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
            <View style={styles.container2}>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",elevation:1,height:40,marginBottom:5,backgroundColor:"white"}}>
                        <Text style={{marginLeft:5}}>
                            Email
                        </Text>
                        <TextInput textAlign='right' placeholder='joan.shay@sparrow.com'/>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",elevation:1,height:40,marginBottom:5,backgroundColor:"white"}}>
                        <Text style={{marginLeft:5}}>
                            Password
                        </Text>
                        <TextInput textAlign='right' placeholder='.....'/>
                    </View>

                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttontext}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginTop:10,}}>
                    <TouchableOpacity style={{marginRight:5}}>
                        <Text>Forgot?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{borderBottomWidth:3,borderColor:"brown"}}>Reset Password</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:50
    },
    container2:{
        marginHorizontal:20,
        marginVertical:70
    },
    imagebox:{
        height:"50%",
        width:"100%",
        elevation:8
    },
    image:{
        width:'100%',
        height:"100%"
    },
    button:{
        backgroundColor:"red",
        height:50,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        marginVertical:15
    },
    buttontext:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    }
})
