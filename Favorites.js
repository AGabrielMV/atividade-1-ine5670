import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';

export default function FavoriteScreen({ navigation }) {
  return (
    <View>
      <View style={styles.button} >
        <Button title="Voltar" onPress={() => navigation.navigate('ShowList')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 15
  }
});