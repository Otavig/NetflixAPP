import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const Card = ({ filme, action }) => {
    return (
        <TouchableOpacity onPress={action} style={[styles.card, { marginLeft: 5 }]}>
            <Image source={filme.imagem} style={styles.image} />
        </TouchableOpacity>
    );
}

const CardSearch = ({ filme, action }) => {
    return (
        <TouchableOpacity onPress={action} style={[stylesSearch.card]}>
            <Image source={filme.imagem} style={stylesSearch.image} />
        </TouchableOpacity>
    );
}

const stylesSearch = StyleSheet.create({
    card: {
        marginHorizontal: 5,
        overflow: 'hidden',
        marginTop: '5%',
        
    },
    image: {
        width: 120,
        height: 175,
    },
    title: {
        textAlign: 'center',
        marginTop: 5,
        color: '#fff',
        fontSize: 16,
    }
});


const styles = StyleSheet.create({
    card: {
        marginHorizontal: 5,
        overflow: 'hidden',
        marginTop: '5%',
        
    },
    image: {
        width: 150,
        height: 225,
    },
    title: {
        textAlign: 'center',
        marginTop: 5,
        color: '#fff',
        fontSize: 16,
    }
});

export {CardSearch, Card};
