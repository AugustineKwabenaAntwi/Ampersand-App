import React from 'react'
import { View,Image,Text,StyleSheet } from 'react-native'
import { Entypo ,Feather,SimpleLineIcons,EvilIcons} from '@expo/vector-icons';



export default function DetailsScreen() {
    return (
        <View style={styles.container}>
             <View style={{flexDirection:"row",alignItems:'center',marginVertical:20}}>
                <Image style={{width:60,height:60,borderRadius:100,marginRight:15}} source={require("../../assets/Images/profile01.jpg")}/>
                <View >
                    <Text style={{fontSize:18}}>Joan Shay</Text>
                    <Text style={{fontSize:15,color:"gray"}}>Head of Marketing</Text>
                </View>
            </View>
            <View>
                <View style = {{flexDirection:'row',marginVertical:15}}>
                    <Entypo style = {{marginRight:10}} name="twitter-with-circle" size={30} color="gray" />
                    <Entypo name="linkedin-with-circle" size={30} color="gray" />
                </View>
                <View style={styles.detailcontainer}>
                    <View style={styles.details}>
                        <Feather style={styles.icon} name="phone" size={16} color="black" />
                        <Text>+233 (245) 235 444</Text>

                    </View>
                    <View style={styles.details}>
                        <SimpleLineIcons style={styles.icon} name="envelope" size={16} color="black" />
                        <Text>larry@ampersandllc.co</Text>

                    </View>
                    <View style={styles.details}>
                        <EvilIcons style={styles.icon} name="location" size={24} color="black" />
                        <Text>Shoreditch,UK</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:100,
        marginHorizontal:30,

    },
    details:{
        flexDirection:"row",
        alignItems:'center',
        marginVertical:10,
    },
    icon:{
        marginRight:15
    }
})
