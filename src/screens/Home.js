import React from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native';
import { CardSearch, Card } from '../components/Card';
import Showcase from '../components/Showcase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
    const { catalogo } = route.params;
    const navigation = useNavigation();

    // Filtrar os filmes com avaliação igual ou superior a 4
    const catalogoComAvaliacaoMaiorQueQuatro = catalogo.filter(filme => filme.avaliacao >= 4.5);

    // Filtrar os filmes
    const catalogoDeAcao = catalogo.filter(filme => filme.genero.includes('ação'));
    const catalogoDeRomance = catalogo.filter(filme => filme.genero.includes('romance'));
    const catalogoDeComedia = catalogo.filter(filme => filme.genero.includes('comedia'));
    const catalogoDeThriller = catalogo.filter(filme => filme.genero.includes('thriller'));

    const filtroSerie = catalogo.filter(serie => serie.tipo.includes('serie'));

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Mostrar o Showcase com os filmes filtrados */}
                <Showcase
                    filmes={catalogoComAvaliacaoMaiorQueQuatro}
                    navigation={navigation}
                />

                {/* Mostrar filmes e series */}
                <Text style={[styles.title, { marginTop: 50 }]}>Filmes/Series</Text>
                <FlatList
                    horizontal
                    data={catalogo}
                    renderItem={({ item }) => <CardSearch filme={item} action={()=> navigation.navigate('Details', { filme: item })} />}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginLeft: 8 }}
                />

                {/* Mostrar filmes de romance */}
                <Text style={[styles.title, { marginTop: 50 }]}>Series</Text>
                <FlatList
                    horizontal
                    data={filtroSerie}
                    renderItem={({ item }) => <Card filme={item} action={()=> navigation.navigate('Details', { filme: item })}/>}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginLeft: 8 }}
                />

                {/* Mostrar filmes de romance */}
                <Text style={[styles.title, { marginTop: 50 }]}>Romance</Text>
                <FlatList
                    horizontal
                    data={catalogoDeRomance}
                    renderItem={({ item }) => <CardSearch filme={item} action={()=> navigation.navigate('Details', { filme: item })} />}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginLeft: 8 }}
                />

                {/* Mostrar filmes de ação */}
                <Text style={[styles.title, { marginTop: 50 }]}>Ação</Text>
                <FlatList
                    horizontal
                    data={catalogoDeAcao}
                    renderItem={({ item }) => <CardSearch filme={item} action={()=> navigation.navigate('Details', { filme: item })} />}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginLeft: 8 }}
                />

                {/* Mostrar filmes de Comedia */}
                <Text style={[styles.title, { marginTop: 50 }]}>Comedia</Text>
                <FlatList
                    horizontal
                    data={catalogoDeComedia}
                    renderItem={({ item }) => <CardSearch filme={item} action={()=> navigation.navigate('Details', { filme: item })} />}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginLeft: 8 }}
                />

                {/* Mostrar filmes de Thriller */}
                <Text style={[styles.title, { marginTop: 50 }]}>Thrillers</Text>
                <FlatList
                    horizontal
                    data={catalogoDeThriller}
                    renderItem={({ item }) => <CardSearch filme={item} action={()=> navigation.navigate('Details', { filme: item })} />}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginLeft: 8 }}
                />
                <Text style={{ marginTop: 30, color: 'white', textAlign: 'center', marginBottom: 20 }}>Ver mais</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 25,
        color: 'white',
        marginLeft: 11
    }
});

export default HomeScreen;
