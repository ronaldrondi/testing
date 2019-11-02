import React from 'react';
import {
    View ,
    Text ,
    StyleSheet ,
    Dimensions ,
    TextInput ,
} from 'react-native';
import { MyMainContainer , MyButton } from '../components/Default';
import Auth from '../logic/Auth';

const screens = Dimensions.get('window');

export default class Login extends React.Component {
    constructor ( props ) {
        super ( props )
        this.state = {
            username : '' ,
            password : '' ,
        }
        this.auth = new Auth()
    }

    login = async () => {
        let result = await this.auth.doLogin( this.state.username , this.state.password )

        if ( result == true ) {
            this.props.navigation.navigate('Home')
        } else {
            alert('gagal')
        }
    }

    render () {
        return (
            <MyMainContainer style = { styles.mainContainer } >

                <View style = { styles.loginBox } >
                    <Text style = { { textAlign : 'center' , fontSize : 24 , fontWeight : '900' } } >LOGIN</Text>
                    <TextInput
                        placeholder = 'username'
                        style = { styles.input }
                        underlineColorAndroid = 'rgba(0,0,0,0.1)'
                    />
                    <TextInput
                        placeholder = 'password' 
                        secureTextEntry
                        style = { styles.input }
                        underlineColorAndroid = 'rgba(0,0,0,0.1)'
                    />
                    <MyButton text = 'Login' style = { { marginHorizontal : screens.width * 5 / 100 } } onPress = { this.login } />
                </View>

            </MyMainContainer>
        )
    }
}

let styles = StyleSheet.create({
    mainContainer : {
        justifyContent : 'center' ,
    } , 
    
    loginBox : {
        backgroundColor : '#42f5a1' ,
        paddingVertical : 10 ,
        borderRadius : 10
    } ,

    input : {
        paddingHorizontal : 10 ,
        marginBottom : 10
    } ,
})