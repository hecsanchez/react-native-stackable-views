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
        const items = data.map((item, index) => {
          console.log('index', index);
            const setItem = Object.assign({}, item);
            setItem.isExpanded = index === 0;
            return setItem;
        });
        return items;
      }
    
      updateLayout = index => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.items];
        
        array.map((value, placeindex) =>
          placeindex === index
            ? (array[placeindex]['isExpanded'] = true)
            : (array[placeindex]['isExpanded'] = false)
        );
    
        this.setState({ items: array});
      };
    
      render() {
        const { items } = this.state;
        const { onSettingsPress, total, onSelect, selectedCards } = this.props;
        console.log('this.state.items', this.state.items);
        return (
          <View>
            <ExpandableListTheme>
                {items && items.map((item, key) => (
                    <ExpandableView
                        onToggle={this.updateLayout.bind(this, key)}
                        onSelect={onSelect}
                        item={item}
                        index={key}
                        onSettingsPress={onSettingsPress}
                        selectedCards={selectedCards}
                    />
                ))}
                <ExpandableView
                    total={total}
                    onToggle={this.updateLayout.bind(this, 3)}
                    index={3}
                />
            </ExpandableListTheme>
          </View>
        );
      }
};