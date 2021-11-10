import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput} from 'react-native';
import * as firebaseobj from 'firebase';
import {firebaseConfig} from './config';
import { useEffect, useState } from 'react/cjs/react.production.min';

if(!firebaseobj.apps.length) {
  firebaseobj.initializeApp(firebaseConfig);
}

// const App: () => ReactNode = () => {
//   const [count, setCount] = useState(100);

  useEffect(() => {

    const myuser = firebaseobj.database().ref('users');
    myusers.on('value', datasnap => {
      console.log(datasnap.val());
    });
    
    // to write data

    const dept = firebaseobj.database().ref('dept');
    dept.set({
      deptid:1,
      deptname:'CS'
    })
  })
// }

export default function App() { 
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}


