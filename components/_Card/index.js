import React, { Component } from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { FlightCard, CarCard, HotelCard } from './lib';

export const Card = (props) => {
    const isSelected = () => {
        console.log('props', props);
        if (props.data) {
            // props.data.filter(option=> {
            //     console.log('option', option);
            //     return true;
            // });
        }
        return true;
    };

    switch(props.type) {
        case 'flight':
            return <FlightCard {...props.data} onSelect={props.onSelect} isSelected={isSelected()}/>;
        case 'car':
            return <CarCard {...props.data} onSelect={props.onSelect} isSelected={isSelected()}/>;
        case 'hotel':
            return <HotelCard {...props.data} onSelect={props.onSelect} isSelected={isSelected()}/>;
        default:
            return;
    }
};