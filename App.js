import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import PieChart from './Components/Piechart';

export default class App extends React.Component {

    render() {
        const data = [
            { svg: { fill: '#906030', onPress: () => console.log(1) }, value: 10, key: 1 },
            { svg: { fill: '#309060', onPress: () => console.log(2) }, value: 10, key: 2 },
            { svg: { fill: '#603090', onPress: () => console.log(3) }, value: 10, key: 3 },
        ];

        return (
            <View style={styles.container} >
                <StatusBar style="auto" />
                <PieChart 
                    data={data}
                    dim={200}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
