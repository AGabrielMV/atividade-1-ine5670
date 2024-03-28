import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Platform } from 'react-native';


export default function ShowDetailsScreen ({ route, navigation }) {
  const {show} = route.params;
  const mapUrl = Platform.select({
      ios: `maps://app?ll=${show.address.geo.lat},${show.address.geo.lng}`,
      android: `geo:${show.address.geo.lat},${show.address.geo.lng}?q=${show.address.geo.lat},${show.address.geo.lng}}(Label)`
    });
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.showName}>{show.name}</Text>
        <Text style={styles.showDetails}>Local: {show.address.city}, {show.address.street}, {show.address.suite}
        <SocialIcon type="google" onPress={() => Linking.openURL(mapUrl)}/></Text>
        <Text style={styles.showDetails}>Horário: {show.time}</Text>
        <Text style={styles.showDetails}>Ingresso: {show.fee}</Text>
        <Text style={styles.showDetails}>Site: <Button onPress={() => Linking.openURL(`http:${show.website}`) }
          title={show.website} /></Text>
        <Text style={styles.showDetails}>Redes Sociais:
        <Button
          onPress={() => Linking.openURL(`http:${show.website}`)}
          title="Site do Artista"
        />
        <SocialIcon
          type="instagram"
          onPress={() => Linking.openURL(`http:${show.instagram}`)}
        />
        <SocialIcon
          type="youtube"
          onPress={() => Linking.openURL(`http:${show.youtube}`)}
        />
        <SocialIcon
          type="twitter"
          onPress={() => Linking.openURL(`http:${show.twitter}`)}
        />
        </Text>
      </View>
      <View style={styles.button} >
        <Button onPress={() => Linking.openURL(`http:${show.website}`) }
          title="Site do Artista" />
      </View>
      <View style={styles.button} >
        <Button onPress={() => Linking.openURL(`tel:${show.phone}`) }
          title="WhatsApp" />
      </View>
      <View style={styles.button} >
        <Button title="Voltar" onPress={() => navigation.navigate('ShowList')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
//  photo: {
//    height: 160,
//    width: 160,
//  },
  showName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  showDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});

