import React from 'react';
import {
    Image,
    Text,
    Dimensions
  } from 'react-native';
import { CardTheme, CardImage, CardContent, Title } from 'app/styled';

export const CarCard = (props) => {
    return(
        <CardTheme>
            <CardImage
                source={{uri: props.image}}
            />
            <CardContent>
                <Title>
                    { props.name }
                </Title>
                <Text>
                    { props.type }
                    { props.seats } Seats
                </Text>
                <Text>
                    { `${props.luggage.large} Large ᛫ ${props.luggage.small} Small Bags`  }
                </Text>
                <Text>
                    { `${props.rating} / 10`  }
                </Text>
                <Text>
                    Pickup: {props.pickUp}
                </Text>

            </CardContent>
        </CardTheme>
);};