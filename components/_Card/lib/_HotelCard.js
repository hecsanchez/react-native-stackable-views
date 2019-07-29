import React, { Component } from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { CardTheme, CardImage, CardContent, Title } from 'app/styled';

export const HotelCard = (props) => (
    <CardTheme>
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