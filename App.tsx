import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Alert
} from 'react-native';
import { Button } from 'react-native-paper';
import FirstComponents from './components/FirstComponents';

import SecondComponent from './components/SecondComponent';
import ModalLogin from './components/ModalLogin';
import { PaperProvider } from 'react-native-paper';
function App(): JSX.Element {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  //useEffect

  const printOnchangeText = () => {
    console.log('Escribiendo en el TextInput')
    setEmail('ricky_uc11@hotmail.com')
  }

  const login = () => {
    if (email && password) {
      console.log('Ingresando al sistema')
      setModalVisible(!modalVisible)

    } else {
      console.log('Datos incompletos')
    }
  }
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.containerEmail}>
          <Text>Email</Text>
          <TextInput
            placeholder="Ingresar email"
            placeholderTextColor={'#FF9933'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.containerEmail}>
          <Text>Contraseña</Text>
          <TextInput
            placeholder="Ingresar password"
            placeholderTextColor={'#FF9933'}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {/* <Button title='Ingresar' onPress={login}>

        </Button> */}
        {/* <Pressable style={{marginTop:30, marginLeft:30}} onLongPress={login}>
        <Text>Login</Text>
      </Pressable> */}
        <Button icon="save" mode="contained" onPress={login}>
          Press me
        </Button>

        <ModalLogin
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        ></ModalLogin>

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  containerEmail: {
    marginTop: 30,
    marginLeft: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
