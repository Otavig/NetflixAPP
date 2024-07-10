import React, { useState, useMemo } from 'react';
import { StyleSheet, View, TextInput, FlatList, Dimensions } from 'react-native';
import { Card, CardSearch } from '../components/Card';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = ({ route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { catalogo } = route.params;

  const numColumns = useMemo(() => {
    return Math.floor(Dimensions.get('window').width / 120); // Ajuste conforme necessário
  }, []);

  const filteredCatalog = catalogo.filter(item => {
    if (searchQuery === '') {
      return true;
    } else {
      return item.titulo.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });
  
  const navigation = useNavigation();

  const keyExtractor = (item, index) => `${item.titulo}-${index}`;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Pesquisar"
      />
      <FlatList
        data={filteredCatalog}
        renderItem={({ item }) => <CardSearch filme={item} action={()=> navigation.navigate('Details', { filme: item })} />}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        key={numColumns} // Força a FlatList a ser recriada quando o número de colunas mudar
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 10,
  },
  input: {
    height: 40,
    width: '93%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default SearchScreen;
