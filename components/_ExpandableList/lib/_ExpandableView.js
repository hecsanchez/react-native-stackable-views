import React, { Component } from 'react';
import {
  LayoutAnimation,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ExpandableViewTheme, ExpandableHeaderTheme, ExpandableContentTheme } from 'app/styled';
import { Card } from 'app/components';
const { width } = Dimensions.get('window');

export class ExpandableView extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
      const height = nextProps.item.isExpanded ? null : 0;
      this.setState({ height });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.height !== nextState.height) {
      return true;
    }
    return false;
  }

  render() {
      const { item, index } = this.props;
      console.log('this.state.height', this.state.height);
    return (
        <ExpandableViewTheme>
            <ExpandableHeaderTheme
                activeOpacity={0.8}
                onPress={this.props.onToggle}
                index={index}
            >
                <Text>{item.key}</Text>
            </ExpandableHeaderTheme>
            <ExpandableContentTheme style={{
                height: this.state.height,
            }}>
                <ScrollView 
                 horizontal= {true}
                 decelerationRate={0}
                 snapToInterval={width}
                 snapToAlignment={"center"}
                 contentInset={{
                   top: 0,
                   left: 0,
                   bottom: 0,
                   right: 20,
                 }}>
                    { item.options && item.options.map(option => (
                        <Card type={ item.key } data={option} />
                    ))}
                </ScrollView>
            </ExpandableContentTheme>
        </ExpandableViewTheme>
    );
  }
}