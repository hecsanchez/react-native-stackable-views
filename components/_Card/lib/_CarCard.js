import React from 'react';
import {
    Image,
    Text,
    Dimensions
  } from 'react-native';
import { 
    CardTheme,
    CardImage,
    CardContent,
    Title,
    Subtitle,
    MediumText,
    SmallText,
    Row,
    Column 
} from 'app/styled';

export const CarCard = (props) => {
    return(
        <CardTheme 
            onPress={()=>props.onSelect(props.id, 'car')}
            isSelected={props.isSelected}
            onLayout={(e)=>props.isPreviouslySelected(e, 'flight')} 
            >
            <CardImage
                source={{uri: props.image}}
            />
            <CardContent>
                <Row>
                    <Column width={60}>
                        <Title>
                            { props.name }
                        </Title>
                        <MediumText>
                            { props.type } { props.seats } Seats
                        </MediumText>
                        <SmallText>
                            { `${props.luggage.large} Large ᛫ ${props.luggage.small} Small Bags`  }
                        </SmallText>
                        <SmallText>
                            { `${props.rating} / 10`  }
                        </SmallText>
                        <SmallText>
                            Pickup: {props.pickUp}
                        </SmallText>
                    </Column>
                    <Column width={40} alignText="flex-end">
                        
                    </Column>
                </Row>
               

            </CardContent>
        </CardTheme>
);};