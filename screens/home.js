import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const home = () => {
    const navigation = useNavigation()


    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace('login')
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text>Email:{auth.currentUser?.email}</Text>
            <TouchableOpacity style={styles.button}
            onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'50%',
        backgroundColor:'#0782f9',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:50
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:15
    },
})
