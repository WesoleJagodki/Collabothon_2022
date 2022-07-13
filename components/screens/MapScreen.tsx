import React from 'react';
import { StyleSheet, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
    map: {
        width: 3840,
        height: 2060
    }
});

export const MapScreen = function ({ navigation }: any): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <ScrollView style={styles.scrollView} horizontal={false}>
                    <Image
                        style={styles.map}
                        source={require('../../assets/images/lodz_zoo_map.jpg')} 
                    />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};
