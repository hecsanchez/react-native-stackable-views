import React from 'react';
import {
    View, 
    Text,
    Modal,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-community/async-storage';

import { ExpandableList } from 'app/components';
import { itinerary } from 'app/data';
import { 
    HomeTheme,
    HeaderIntroTheme,
    Row,
    Column,
    BookmarkContainer,
    SmallText,
    MainTitle,
    MainSubtitle
} from 'app/styled';

export class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalVisible: false,
            isBookmarked: false,
            selectedCards: null
        };
    }

    async componentDidMount() {
        const storage = await AsyncStorage.getItem('selectedCards');
        const selectedCards = JSON.parse(storage);
        this.setState({
            selectedCards
       });
    }

    toggleModal = (show) => {
        this.setState({ isModalVisible: show });
    }

    toggleBookmark = () => {
        this.setState((prevState) => ({
            isBookmarked: !prevState.isBookmarked
        }));
    }

    onSelect = async(id, type) => {
        this.setState({ isReady: false });

        const newSelection = {
            ...this.state.selectedCards,
            [type]: id,
        };

        await AsyncStorage.setItem('selectedCards', JSON.stringify(newSelection));

        this.setState({ 
            selectedCards: newSelection
        });
    }

    render() {
        return (
            <>
                <HomeTheme>
                    <HeaderIntroTheme>
                        <Row>
                            <Column width={10}>
                                <TouchableOpacity>
                                    <AntIcon name="arrowleft" size={20} color="#ffffff" />
                                </TouchableOpacity>
                            </Column>
                            <Column width={75}>
                                <MainTitle>{ itinerary.name }</MainTitle>
                                <MainSubtitle>{ `${itinerary.startDate} / ${itinerary.endDate}` }</MainSubtitle>
                                <MainSubtitle>
                                    { itinerary.origin }  <SimpleLineIcon name="directions" size={15} color="#ffffff" />  { itinerary.destination }
                                </MainSubtitle>
                            </Column>
                            <Column width={15}>
                                <BookmarkContainer onPress={()=>this.toggleBookmark()}>
                                    { this.state.isBookmarked 
                                    ? <Icon name="bookmark" size={20} color="#ffffff" />
                                    : <Icon name="bookmark-o" size={20} color="#ffffff" />
                                    }
                                </BookmarkContainer>
                            </Column>
                        </Row>                        
                    </HeaderIntroTheme>
                    { this.state.selectedCards &&
                        <ExpandableList 
                            total={itinerary.total}
                            data={itinerary.sections}
                            onSettingsPress={this.toggleModal}
                            onSelect={this.onSelect}
                            selectedCards={this.state.selectedCards}
                            isReady={this.state.isReady}
                        />
                    }
                    
                </HomeTheme>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isModalVisible}
                >
                    <View style={{marginTop: 100}}>
                        <View>            
                            <TouchableHighlight
                                onPress={() => { this.toggleModal(false); }
                            }>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
};