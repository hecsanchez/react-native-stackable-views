import styled from "styled-components/native";
import { screenWidth } from "app/helpers/measurements";

export const CardTheme = styled.View`
    background: #ffffff;
    width: ${screenWidth - 80};
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 300px;
    box-shadow: 0 0 10px #d4d2d2;
    border-radius: 20px;
`;

export const CardImage = styled.ImageBackground`
    height: 150px;
    borderTopLeftRadius: 20;
    borderTopRightRadius: 20;
    overflow: hidden;
`;

export const CardContent = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-weight: bold;
`;