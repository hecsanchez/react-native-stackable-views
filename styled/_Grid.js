import styled from "styled-components/native";

export const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Column = styled.View`
   width: ${props=>props.width ? props.width : '100'}%;
   text-align: ${props=>props.alignText ? props.alignText : 'left'};
`;