import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { SmallCard, CardImage } from 'app/styled';

export const FlightCard = (props) => (
    <TouchableOpacity onPress={()=>props.onSelect(props.id, 'flight')}>
        <SmallCard isSelected={props.isSelected}>       
            <Text>
                Test
            </Text>
        </SmallCard>
        <SmallCard isSelected={props.isSelected}>       
            <Text>
                Test
            </Text>
        </SmallCard>
    </TouchableOpacity>
);