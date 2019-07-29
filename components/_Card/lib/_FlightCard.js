import React, { Component } from 'react';
import {
    Image,
    Text,
  } from 'react-native';
import { CardTheme, CardImage } from 'app/styled';

export const FlightCard = (props) => (
        <CardTheme>
            <Image
                source={{uri: props.image}}
            />            
            <Text>
                Test
            </Text>
        </CardTheme>
);