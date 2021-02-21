import React from 'react';
import * as shape from 'd3-shape';
import Svg, { G, Path, } from 'react-native-svg';

export default class PieChart extends React.Component {

    render() {
        if (this.props.data.lenght === 0)
            return <View style={{ height: this.props.dim, width: this.props.width }} />;

        return (
            <Svg style={{ height: this.props.dim, width: this.props.dim }}>
                <G x={this.props.dim / 2} y={this.props.dim / 2}>
                    {shape
                        .pie()
                        .value(obj => obj.value)
                        .sort((a, b) => b.value - a.value)
                        .startAngle(0)
                        .endAngle(Math.PI * 2)(this.props.data)
                        .map((slice, index) => {
                            const { key, onPress, svg } = this.props.data[index]
                            return (
                                <Path
                                    key={key}
                                    onPress={onPress}
                                    {...svg}
                                    d={shape
                                        .arc()
                                        .outerRadius(this.props.dim / 2)
                                        .innerRadius((this.props.dim / 2) * 0.6)
                                        .padAngle(0.05)(slice)
                                    }
                                />
                            );
                        })
                    }
                </G>
            </Svg>
        );
    }
}
