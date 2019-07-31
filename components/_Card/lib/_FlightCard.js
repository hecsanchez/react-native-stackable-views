import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { 
    SmallCard, 
    Row,
    Column,
    MediumText,
    SmallText,
    Divider,
    MediumBoldText
} from 'app/styled';
import AntIcon from 'react-native-vector-icons/AntDesign';

export const FlightCard = (props) => {
    console.log('flight props', props);
    return(
    <TouchableOpacity 
    onPress={()=>props.onSelect(props.id, 'flight')}
    onLayout={(e)=>props.isPreviouslySelected(e, 'flight')} 
    >
        <SmallCard isSelected={props.isSelected}>
            <Row>
                <Column width={50}>
                    <MediumText>Departing ᛫ {props.outbound.departureDate}</MediumText>
                </Column>
                <Column width={50} alignText="flex-end">
                    <SmallText>Shortest</SmallText>
                </Column>
            </Row> 
            <Divider></Divider>
            <Row>
                <Column width={20}>
                <Image
                        style={{width: 40, height: 40}}
                        source={{uri: props.outbound.airlineLogo}}
                    />
                </Column>
                <Column width={20}>
                    <MediumBoldText>{props.outbound.departureTime}</MediumBoldText>
                    <MediumText>{props.outbound.origin}</MediumText>
                </Column>
                <Column width={20} alignText="center">
                    <AntIcon name="arrowright" size={20} color="#000000" />
                </Column>
                <Column width={20}>
                    <MediumBoldText>{props.outbound.arrivalDate}</MediumBoldText>
                    <MediumText>{props.outbound.destination}</MediumText>
                </Column>
                <Column width={20}>
                    
                </Column>
            </Row>
            <Row>
                <Column width={80}>
                    <SmallText>
                        {props.outbound.stops 
                            ? `${props.outbound.stops.length} stops` 
                            : 'Non Stop'
                        } ᛫ {props.outbound.length} ᛫ {props.outbound.airline}
                    </SmallText>
                </Column>
                <Column width={20} alignText='flex-end'>
                    <MediumBoldText>C${props.outbound.price}</MediumBoldText>
                </Column>
            </Row>
        </SmallCard>
        <SmallCard isSelected={props.isSelected}> 
            <Row>
                <Column width={50}>
                    <MediumText>Returning ᛫ {props.outbound.arrivalDate}</MediumText>
                </Column>
                <Column width={50} alignText="flex-end">
                    <SmallText>Shortest</SmallText>
                </Column>
            </Row> 
            <Divider></Divider>
            <Row>
                <Column width={20}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={{uri: props.outbound.airlineLogo}}
                    />
                </Column>
                <Column width={20}>
                    <MediumBoldText>{props.inbound.departureTime}</MediumBoldText>
                    <MediumText>{props.inbound.origin}</MediumText>
                </Column>
                <Column width={20} alignText="center">
                    <AntIcon name="arrowright" size={20} color="#000000" />
                </Column>
                <Column width={20}>
                    <MediumBoldText>{props.inbound.arrivalDate}</MediumBoldText>
                    <MediumText>{props.inbound.destination}</MediumText>
                </Column>
                <Column width={20}>
                    
                </Column>
            </Row>
            <Row>
                <Column width={80}>
                    <SmallText>
                        {props.inbound.stops 
                            ? `${props.inbound.stops.length} stops` 
                            : 'Non Stop'
                        } ᛫ {props.inbound.length} ᛫ {props.inbound.airline}
                    </SmallText>
                </Column>
                <Column width={20} alignText='flex-end'>
                    <MediumBoldText>C${props.outbound.price}</MediumBoldText>
                </Column>
            </Row>

        </SmallCard>
    </TouchableOpacity>
);
};