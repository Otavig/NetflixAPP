import React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const Showcase = ({ filmes, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { filme: item })} style={styles.slide}>
                <Image source={item.imagem} style={styles.image} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                data={filmes}
                renderItem={renderItem}
                sliderWidth={largura}
                itemWidth={largura * 0.7} // Defina o tamanho do item aqui (por exemplo, 70% da largura da tela)
                layout="default"
                loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={5000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        marginTop: 30,
    },
    slide: {
        width: largura / 1.5, // Defina o tamanho do item aqui também
        height: altura / 2.4, // Ajuste a altura conforme necessário
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Showcase;
