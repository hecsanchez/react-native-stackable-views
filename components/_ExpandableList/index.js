import React from 'react';
import {
    ScrollView,
    LayoutAnimation,
    View, 
    Text
} from 'react-native';
import { ExpandableView } from './lib';
import { ExpandableListTheme } from 'app/styled';

export class ExpandableList extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = {
            items: []
        };
      }

      componentDidMount() {
          const items = this.setData(this.props.data);
          this.setState({ items });
      }

      setData = (data) => {
          console.log('setting data');
        const items = data.map(item => {
            const setItem = Object.assign({}, item);
            setItem.isExpanded = false;
            return setItem;
        });
        return items;
      }
    
      updateLayout = index => {
          console.log("index", index);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.items];
        array.map((value, placeindex) =>
          placeindex === index
            ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
            : (array[placeindex]['isExpanded'] = false)
        );
    
        this.setState({ items: array});
      };
    
      render() {
          const { items } = this.state;
        return (
          <View>
            <ExpandableListTheme>
                {items && items.map((item, key) => (
                    <ExpandableView
                        key={item.category_name}
                        onToggle={this.updateLayout.bind(this, key)}
                        item={item}
                        index={key}
                    />
                ))}
            </ExpandableListTheme>
          </View>
        );
      }
};