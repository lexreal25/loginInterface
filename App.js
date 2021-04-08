import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet,ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import Contact from './ContactScreen/contact';


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username:'',
      email: '',
      password: '',
      confirmPassword: ''

    }
  }

  handleChange = ({username,password,email,confirmPassword}) => {
    this.setState({
      username,
      password,
      email,
      confirmPassword
    })
  }
  
 validation = () => {
    
    const {username, password,email, confirmPassword} = this.state
    if(username === 'daniel' && password === 'lex' && email !== '' && confirmPassword === password){
      Alert.alert('login successful')
    }else{
      return Alert.alert('sorry the login details are incorrect')
    }
    
  }
  
  render(){

    const { username,email, password, confirmPassword } = this.state
    
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Sign up</Text>
            </View>

            <View>
                <TextInput style={styles.input} 
                  placeholder='Username'
                  placeholderTextColor='#aaaaaa'
                  onChangeText={this.handleChange}
                  value={username}
                 />
                <TextInput style={styles.input} 
                  placeholder='email'
                  placeholderTextColor='#aaaaaa'
                  keyboardType='email-address'
                  onChangeText={this.handleChange}
                  value={email}
                />
                <TextInput style={styles.input} 
                  placeholder='Password'
                  placeholderTextColor='#aaaaaa'
                  secureTextEntry={true} 
                  value={password}
                  onChangeText={this.onChangeText}
                />
                {/* <Text style={styles.forgotPassword}>Forgot password?</Text> */}
                <TextInput style={styles.input} 
                  placeholder='Confirm Password'
                  placeholderTextColor='#aaaaaa'
                  secureTextEntry={true} 
                  value={confirmPassword}
                  onChangeText={this.handleChange}
                />
            </View>


            <View>
                <TouchableOpacity  style={styles.buttonContainer}
                    onPress={this.validation}
                >
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>You already have account?</Text>
                <TouchableOpacity  onPress={() => Alert.alert('functionality not enabled')}>
                    <Text style={styles.signUpText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
  }
}






const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100
  },
  loginText: {
    fontSize: 30,
    color: '#5100ad' //'#9D0000'
  },
  loginContainer: {
    marginBottom: 30
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#5100ad',
    fontSize: 16,
    height: 50,
    marginTop: 20
  },
  // forgotPassword: {
  //   alignSelf: 'flex-end',
  //   marginVertical: 5,
  //   color: '#0853a8'
  // },
  buttonContainer: {
    height: 50,
    backgroundColor:'#5100ad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 50,

  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  },
  noAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16
  },
  signUpText: {
    fontSize: 16,
    color: '#5100ad',
    textDecorationLine: 'underline'
  },

});
