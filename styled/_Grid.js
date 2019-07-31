import styled from "styled-components/native";

export const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

export const BottomRow = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
`;

export const Column = styled.View`
   width: ${props=>props.width ? props.width : '100'}%;
   align-items: ${props=>props.alignText ? props.alignText : 'flex-start'};
`;