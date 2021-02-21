import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import PieChart from './components/Piechart';
import ProgressCircle from './components/ProgressCircle';

export default class App extends React.Component {

    render() {
        const data = [
            { svg: { fill: '#906030' }, onPress: () => console.log(1) },
            { svg: { fill: '#903060' }, onPress: () => console.log(2) },
            { svg: { fill: '#603090' }, onPress: () => console.log(3) },
            { svg: { fill: '#609030' }, onPress: () => console.log(4) },
            { svg: { fill: '#309060' }, onPress: () => console.log(5) },
            { svg: { fill: '#306090' }, onPress: () => console.log(6) },
        ];

        data.forEach(item => item.value = Math.round(Math.random() * 10) + 5);

        return (
            <View style={styles.container} >
                <StatusBar style="auto" />
                <PieChart
                    data={data}
                    dim={200}
                    width={0.2}
                />
                <View style={{ height: 100 }} />
                <ProgressCircle
                    dim={200}
                    progressColor={'#dbca46'}
                    progress={0.3}
                    strokeWidth={5}
                    trackColor={'#3e3e3e'}
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
