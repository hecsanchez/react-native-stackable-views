import React, { Component } from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { FlightCard, CarCard, HotelCard } from './lib';

export const Card = (props) => {
    switch(props.type) {
        case 'flight':
            return <FlightCard {...props.data} />;
        case 'car':
            return <CarCard {...props.data}/>;
        case 'hotel':
            return <HotelCard {...props.data}/>;
        default:
            return;
    }
};