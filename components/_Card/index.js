import React, { Component } from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { FlightCard, CarCard, HotelCard } from './lib';

export const Card = (props) => {
    const isSelected = () => {
        if (props.selectedCards) {
            const isSelected = Object.keys(props.selectedCards)
                .filter(key => {
                    console.log('props.selectedCards[key]', props.selectedCards[key]);
                    console.log('props.data.id', props.data.id);
                    return props.selectedCards[key] === props.data.id;
                }).length > 0;
            return isSelected;
        }
        return false;
    };

    isPreviouslySelected = (e) => {
        if (isSelected()) {
            props.scrollToCard(e.nativeEvent.layout);
        }
    };

    switch(props.type) {
        case 'flight':
            return <FlightCard isPreviouslySelected={isPreviouslySelected} {...props.data} onSelect={props.onSelect} isSelected={isSelected()}/>;
        case 'car':
            return <CarCard isPreviouslySelected={isPreviouslySelected} {...props.data} onSelect={props.onSelect} isSelected={isSelected()}/>;
        case 'hotel':
            return <HotelCard isPreviouslySelected={isPreviouslySelected} {...props.data} onSelect={props.onSelect} isSelected={isSelected()}/>;
        default:
            return;
    }
};