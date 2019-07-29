import styled from "styled-components/native";

export const ExpandableListTheme = styled.ScrollView`
    padding-top: 50px;
    overflow: visible;
`;

export const ExpandableViewTheme = styled.View`
    margin-top: -50px;
`;

export const ExpandableHeaderTheme = styled.TouchableOpacity`
    background-color: ${props=>{
        console.log('props', props);
        switch(props.index) {
            case 0:
                return '#ebebeb';
            case 1:
                return '#2c2c2c';
            case 2:
                return '#000000';
            default: 
                return "#000000";
        }}};
    borderTopLeftRadius: 50;
    padding: 15px;
    padding-bottom: 50px;
`;

export const ExpandableContentTheme = styled.View`
`;