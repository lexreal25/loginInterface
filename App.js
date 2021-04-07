import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet,ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import Contact from './ContactScreen/contact';


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password: ''

    }
  }
  validation = () => {
    const {username, password} = this.state
    if(username === 'daniel' && password === 'lex'){
      return <Contact />
    }else{
      return Alert.alert('sorry the login details are incorrect')
    }
    
  }
  // onPress = () => {
  //   if(this.state.username && this.state.password !== null){
  //     return Alert.alert('key pressed')
  //   }
  // }

  render(){
    const { username, password } = this.state
    
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Log in</Text>
            </View>

            <View>
                <TextInput style={styles.input} 
                  placeholder='Username'
                  placeholderTextColor='aaaaaa'
                  onChangeText={(username) => {
                  return this.setState({username})
                  }}
                  value={username}
                 />
                <TextInput style={styles.input} 
                  placeholder='Password'
                  placeholderTextColor='aaaaaa'
                  secureTextEntry={true} 
                  value={password}
                  onChangeText={(password) => {
                    console.log(password)
                    return this.setState({password})
                  }}
                />
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>


            <View>
                <TouchableOpacity  style={styles.buttonContainer}
                    onPress={() => this.validation() } >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Don't have account?</Text>
                <Text style={styles.signUpText}>Sign up</Text>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 5,
    color: '#0853a8'
  },
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
    color: '#5100ad'
  }
});
