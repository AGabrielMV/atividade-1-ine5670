import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function ShowListScreen({ navigation }) {
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // fetch('./assets/shows.json')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Timeout de 2 segundos
      })
      .catch(error => {
        console.log("Erro ao carregar os dados", error);
        setLoading(false);
      });
    }, []);

    return(
      <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
        <FlatList
          data={data}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigation.navigate('ShowDetails', {show: item})}>
            <View>
              <Text style={styles.show}>{item.name}</Text>
            </View>
          </TouchableOpacity>}
        />
        <Button title="Favoritos" onPress={() => navigation.navigate('Favorites')} />
        <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
      )}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 15
  },
  show: {
    fontSize: 18,
    height: 44,
  }
})