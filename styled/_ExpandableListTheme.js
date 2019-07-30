import styled from "styled-components/native";
import * as Utils from "./utils";

export const ExpandableListTheme = styled.ScrollView`
    padding-top: 20px;
    overflow: visible;
`;

export const ExpandableViewTheme = styled.View`
    margin-top: -20px;
`;

export const ExpandableHeaderTheme = styled.TouchableOpacity`
    background-color: ${props=> Utils.getBackground(props.index)};
    borderTopLeftRadius: 20;
    padding: 15px 0 30px 0;
`;

export const ExpandableContentTheme = styled.View`
    background: ${props=> Utils.getBackground(props.index)};
`;

export const ExpandableTitle = styled.Text`
    text-transform: capitalize;
`;

export const IconContainer = styled.TouchableOpacity`
    padding: 0 10px;
`;