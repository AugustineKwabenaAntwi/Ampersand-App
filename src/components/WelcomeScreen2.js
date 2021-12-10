import React from 'react'
import { Image, View ,Text,StyleSheet} from 'react-native'

export default function WelcomeScreen2() {
    return (
        <View>
            <View>
                <Image source={require("../../assets/Images/welcome-screen-image.jpg")}/>
            </View>
            <View>
                <Text>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
            </View>
            <View>
                <Text>Sign in or register with your Ampersand email</Text>
            </View>
            <View>
                <Text>REGISTER</Text>
                <Text>SIGN IN</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{}
})
