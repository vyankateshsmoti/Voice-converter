import * as React from 'react';
import * as Speech from 'expo-speech';
import { Text, View, StyleSheet,TextInput ,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class App extends React.Component{
 
 constructor(){
   super();
   this.state={
     name:[]
   }
 }

   speak=(name)=> {
                var voice = this.state.name
                Speech.speak(voice)
              }


  render(){
    return(
       <View style={{flex:1,backgroundColor:'#0e5889',borderColor:'black'}}>
       <SafeAreaProvider>

           <Header
         statusBarProps={{ barStyle: 'dark-content' }}
      
           centerComponent={{ text: 'TEXT CONVERTER', style: { color: 'black',fontSize:18,fontFamily:'monospace' } }}
           containerStyle={{
           backgroundColor: '#fffa66',
          justifyContent: 'space-around',
  }}
/>
        
   
         <Image
         style={styles.img}
         source={require('./Voice_Input.gif')}/>
            
         <TextInput
         style={[styles.inputBox,style={marginTop:60}]}
           onChangeText={ text => {
             this.setState({ name : text})
              }}
                placeholder="Enter The Word"
                   
           />
    

         <TouchableOpacity
         style={styles.btn}
           onPress={()=>{
             var word = this.state.name

             word.length >= 1 ?  this.speak(this.state.name)
                              :  alert('Input Box is Empty , Please Enter a Word.')

                   
           }}>
           <Text style={styles.txt}>Click Here To Hear  </Text>
            <Text style={styles.txt}>speech  </Text>
           </TouchableOpacity>

           </SafeAreaProvider>
       </View>
    )
  }
}

const styles = StyleSheet.create({

  img:{
     width:350,
     height:200,
     alignSelf:'center',
     position:'relative'
  },
  inputBox:{
    width:300,
    height:60,

    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    marginTop:10,
    borderColor:'black',
       
    fontSize:20,
    color:'black',
    backgroundColor:'#fffa66',
    borderRadius:15,
    fontFamily:'monospace',

 
  },
  btn:{
    width:230,
    height:80,
    alignSelf:'center',
    marginTop:100,
    borderRadius:50,
    textAlign:'center',
   justifyContent:'center',
    backgroundColor:"#8bd8bd"
  },
  txt:{
    fontSize:15,
    color:'black',
    textAlign:'center',
        fontFamily:'monospace'
  }
})
