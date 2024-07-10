import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';

const PersonScreen = ({ navigation, onSelect }) => {
    // Função para lidar com o clique em um item
    const handlePress = (person) => {
      // Chamar a função onSelect passando a pessoa selecionada
      onSelect(person);
      // Navegar para a tela principal com os parâmetros de pessoa selecionada
      navigation.navigate('Home', { personSelected: person });
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.listaPerfil}>
          {/* Item 1 */}
          <TouchableOpacity onPress={() => handlePress('Otávio Garcia')} style={styles.profileItem}>
            <Image style={styles.img} source={require('../assets/imgs_perfil/perfil2.jpg')} />
            <Text style={styles.texto}>Otávio Garcia</Text>
          </TouchableOpacity>
          {/* Item 2 */}
          <TouchableOpacity onPress={() => handlePress('Amanda Mello')} style={styles.profileItem}>
            <Image style={styles.img} source={require('../assets/imgs_perfil/perfil1.jpg')} />
            <Text style={styles.texto}>Amanda Mello</Text>
          </TouchableOpacity>
          {/* Item 3 */}
          <TouchableOpacity onPress={() => handlePress('Iraci Mello')} style={styles.profileItem}>
            <Image style={styles.img} source={require('../assets/imgs_perfil/perfil3.jpg')} />
            <Text style={styles.texto}>Iraci Mello</Text>
          </TouchableOpacity>
          {/* Item 4 */}
          <TouchableOpacity onPress={() => alert('Indisponivel')} style={styles.profileItem}>
            <Image style={styles.img} source={require('../assets/imgs_perfil/adicionar.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  listaPerfil: {
    flexDirection: 'row',
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    maxWidth: '100%', 
  },
  profileItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 20, 
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 10,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
});

export default PersonScreen;
