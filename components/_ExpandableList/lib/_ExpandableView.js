import React, { Component } from 'react';
import {
  LayoutAnimation,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Dimensions,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  ExpandableViewTheme,
  ExpandableHeaderTheme,
  ExpandableContentTheme,
  ExpandableTitle,
  Row,
  Column,
  IconContainer,
  Filter
} from 'app/styled';
import { Card } from 'app/components';
const { width, height } = Dimensions.get('window');
const contentHeight = height - 380;

export class ExpandableView extends Component {
  
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    if (this.props.item && this.props.item.isExpanded) {
      this.setState({ height: height - 380 });
    }
  }

  componentWillReceiveProps(nextProps) {
      const height = nextProps.item && nextProps.item.isExpanded ? contentHeight : 0;
      this.setState({ height });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.height !== nextState.height) {
      return true;
    }
    return false;
  }

  renderColumns = () => {
    const { item, onSettingsPress, total } = this.props;

    return(
      <Row>
      { item ?
        <>
          <Column width={5}></Column>
          <Column width={10}>
            <Icon name={item && item.icon} size={17} color="#989db1" />
          </Column>
          <Column width={15}>
            <ExpandableTitle>{item && item.key}</ExpandableTitle>
          </Column>
          <Column width={40}>
            <Text>{item && item.description}</Text>
          </Column>
          <Column width={20}>
            <Text>C${item && item.price}</Text>
          </Column>
          <Column width={10} alignText="right">
            <IconContainer
              onPress={()=>onSettingsPress(true)}
            >
              <Icon name="ellipsis-v" size={15} color="#515c6b" />
            </IconContainer>
          </Column>
        </>
        :
        <>
          <Column width={5}></Column>
          <Column width={65}>
            <Text>Trip Overview</Text>
          </Column>
          <Column width={20}>
            <Text>C${total}</Text>
          </Column>
          <Column width={10} alignText="right">
          </Column>
        </>
      }
      </Row>
    );
  }

  renderFilters = () => {
    const { item, index } = this.props;

    return (
      <Row>
        { item && item.filters.map(filter=>{
          const colWidth = 100 / item.filters.length;

          return (
            <Column width={colWidth}>
              <Filter index={index}>{filter}</Filter>
            </Column>
          );
        })}
      </Row>
    );
  }

  renderContent = () => {
    const { item, onSelect } = this.props;

    return (
      <ScrollView 
        onMomentumScrollEnd={this.onScroll}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width - 40}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
      >
        { item && item.options && item.options.map(option => (
            <Card type={ item.key } data={option} onSelect={onSelect}/>
        ))}
      </ScrollView>
    );
  }

  render() {
    const { item, index } = this.props;

    return (
        <ExpandableViewTheme>
            <ExpandableHeaderTheme
                activeOpacity={1}
                onPress={item && this.props.onToggle}
                index={index}
            >
              { this.renderColumns() }
            </ExpandableHeaderTheme>
            <ExpandableContentTheme 
              style={{
                height: this.state.height
              }}
              index={index}
            >
              { this.renderFilters() }
              { this.renderContent() }
            </ExpandableContentTheme>
        </ExpandableViewTheme>
    );
  }
}