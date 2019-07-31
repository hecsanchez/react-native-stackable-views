import React from 'react';
import { 
    CardTheme, 
    CardImage, 
    CardContent, 
    Title, 
    MediumBoldText, 
    SmallText,
    Row,
    Column,
    BottomRow
} from 'app/styled';

export const HotelCard = (props) => (
    <CardTheme 
        onPress={()=>props.onSelect(props.id, 'hotel')} 
        isSelected={props.isSelected}
        onLayout={(e)=>props.isPreviouslySelected(e, 'flight')} 
    >
        <CardImage
            source={{uri: props.image}}
        />
        <CardContent>
            <Title>
                { props.name }
            </Title>
            <Row>
                <Column width={40}>
                    <SmallText>{props.partnerType}</SmallText>
                </Column>
                <Column width={40}>
                    <SmallText>{props.dealType}</SmallText>
                </Column>
            </Row>
            <BottomRow>
                <Column width={70}>
                    <SmallText>{props.distanceToDestination} to destination</SmallText>
                </Column>
                <Column width={30} alignText='flex-end'>
                    <MediumBoldText>C${props.price}</MediumBoldText>
                </Column>
            </BottomRow>
        </CardContent>
    </CardTheme>
);