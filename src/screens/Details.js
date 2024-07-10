import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsScreen = () => {
    const route = useRoute(); 
    const { filme } = route.params;

    // Função para calcular as estrelas com base na avaliação
    const renderStarRating = (rating) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating);
        const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
        const emptyStars = totalStars - filledStars - halfStar;

        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<Icon name="star" size={14} color="#ffc107" key={i} />);
        }

        if (halfStar === 1) {
            stars.push(<Icon name="star-half-empty" size={14} color="#ffc107" key="half" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Icon name="star-o" size={14} color="#ffc107" key={`empty${i}`} />);
        }

        return stars;
    };

    return (
        <View style={styles.container}>
            {/* Imagem de background */}
            <ImageBackground
                source={filme.imagem}
                style={styles.backgroundImage}
            >
                <TouchableOpacity style={styles.playButton}>
                    <Text style={styles.playIcon}>▶</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{filme.titulo}</Text>
                    <View style={styles.starRating}>{renderStarRating(filme.avaliacao)}</View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.info, styles.TextBold]}>Ano: {filme.ano}</Text>
                        <Text style={[styles.info, styles.TextBold]}>Gênero: {filme.genero.join(', ')}</Text>
                    </View>
                    <Text style={[styles.sinopse, styles.justifyText]}>{filme.sinopse}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingTop: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    playButton: {
        position: 'absolute',
        top: '40%',
        left: '45%',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playIcon: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 2
    },
    detailsContainer: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        textAlign: 'center',
    },
    starRating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    info: {
        fontSize: 10,
        color: '#fff',
        marginLeft: 20,
        marginRight: 20
    },
    sinopse: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
    },
    TextBold: {
        fontWeight: 'bold',
    },
    justifyText: {
        textAlign: 'justify',
    },
});

export default DetailsScreen;
