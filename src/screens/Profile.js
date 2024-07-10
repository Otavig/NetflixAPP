import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen = ({ route }) => {
  // Recebendo o parâmetro pessoaEscolhida da rota
  const { pessoaEscolhida } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.listaPerfil}>
        <View style={styles.profileItem}>
          <Image style={[styles.img, pessoaEscolhida === 'Otávio Garcia' && styles.selectedProfileItem]} source={require('../assets/imgs_perfil/perfil2.jpg')} />
          <Text style={[styles.texto, pessoaEscolhida === 'Otávio Garcia' && styles.selectedText]}>Otávio Garcia</Text>
        </View>
        <View style={styles.profileItem}>
          <Image style={[styles.img, pessoaEscolhida === 'Amanda Mello' && styles.selectedProfileItem]} source={require('../assets/imgs_perfil/perfil1.jpg')} />
          <Text style={[styles.texto, pessoaEscolhida === 'Amanda Mello' && styles.selectedText]}>Amanda Mello</Text>
        </View>
        <View style={styles.profileItem}>
          <Image style={[styles.img, pessoaEscolhida === 'Iraci Mello' && styles.selectedProfileItem]} source={require('../assets/imgs_perfil/perfil3.jpg')} />
          <Text style={[styles.texto, pessoaEscolhida === 'Iraci Mello' && styles.selectedText]}>Iraci Mello</Text>
        </View>
        <View style={styles.profileItem}>
          <Image style={styles.img} source={require('../assets/imgs_perfil/adicionar.png')} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Ionicons name="pencil" color={'white'} size={10} style={{ marginTop: 10 }} />
        <Text style={[styles.texto, { marginLeft: 5, fontSize: 15, fontWeight: 'bold' }]}>Gerenciar perfis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listaPerfil: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    maxWidth: '100%',
    marginTop: 20,
  },
  profileItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  selectedProfileItem: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  selectedText: {
    fontWeight: 'bold',
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

export default ProfileScreen;
