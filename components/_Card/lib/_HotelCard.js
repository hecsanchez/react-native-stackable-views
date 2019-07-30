import React, { Component } from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { CardTheme, CardImage, CardContent, Title } from 'app/styled';

export const HotelCard = (props) => (
    <CardTheme onPress={()=>props.onSelect(props.id, 'hotel')} isSelected={props.isSelected}>
        <CardImage
            source={{uri: props.image}}
        />
        <CardContent>
            <Title>
                { props.name }
            </Title>

        </CardContent>
    </CardTheme>
);