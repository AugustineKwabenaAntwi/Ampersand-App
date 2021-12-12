import React from 'react';
import { View ,StyleSheet,Text,TextInput,TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function RegisterScreen() {
    return (
        <View style={styles.container}>
                <View style ={styles.addImageBox}>
                    <Image style ={styles.addImage} source={require("../../assets/Images/profile01.jpg")}/>
                </View>
                <View style={styles.container2} >
                
                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        Full Name
                    </Text>
                    <TextInput textAlign='right' placeholder='Joan Shay'/>
                </View>
                

                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        Email
                    </Text>
                    <TextInput textAlign='right' placeholder='joan.shay@sparrow.com'/>
                </View>
                

                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        Phone Number
                    </Text>
                    <TextInput textAlign='right' placeholder='+233 (244) 245 190'/>
                </View>
                

                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        Role
                    </Text>
                    <TextInput textAlign='right' placeholder='Director of Marketing'/>
                </View>
                

                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        Twitter
                    </Text>
                    <TextInput textAlign='right' placeholder='@joansays'/>
                </View>
                

                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        LinkedIn
                    </Text>
                    <TextInput textAlign='right' placeholder='/joan.shay'/>
                </View>
                
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttontext}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
    },
    addImageBox:{
        width:"100%",
        height:"40%"
    },
    addImage:{
        width:"100%",
        height:"100%"
    },
    container2:{
        marginTop:10,
        marginHorizontal:20
    },
    detail:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        elevation:1,
        height:40,
        marginBottom:5,
        backgroundColor:"white",
        marginVertical:10
    },
    detailText:{
        marginLeft:5
    },
    button:{
        backgroundColor:"red",
        height:50,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        marginVertical:15,
    },
    buttontext:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
})