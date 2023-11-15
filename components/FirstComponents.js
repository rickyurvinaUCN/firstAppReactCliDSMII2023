import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const FirstComponents = () => {
  const [count, setCount] = useState(5);

  const alterCounter=()=>{
        setCount(count+1);
  }

  return (
    <>
      <View>
        <Text>FirstComponents {" "}
            {count}
        </Text>
        <Button title="Alterar" onPress={alterCounter}/>    
      </View>
    </>
  );
};

export default FirstComponents;

const styles = StyleSheet.create({});
