import React from 'react';
import {
    View, 
    Text
} from 'react-native';
import { ExpandableList } from 'app/components';
import { itinerary } from 'app/data';

export class Home extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <View>
                <Text>{ itinerary.name }</Text>
                <Text>{ `${itinerary.startDate} / ${itinerary.endDate}` }</Text>
                <ExpandableList data={itinerary.sections}/>
            </View>
        );
    }
};