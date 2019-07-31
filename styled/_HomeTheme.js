import styled from "styled-components/native";

export const HomeTheme = styled.ScrollView`
    background-color: #5acbcb;
`;

export const HeaderIntroTheme = styled.View`
    padding-top: 30px;
    padding: 15px;
`;

export const BookmarkContainer = styled.TouchableOpacity`
    background-color: #fbcb7c;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    padding: 10px 13px;
    margin-top: -10px;
`;

export const MainTitle = styled.Text`
    font-size: 17px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const MainSubtitle = styled.Text`
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 7px;
`;

export const Filter = styled.Text`
    margin: 0 3px;
    background-color: ${props=>props.index !== 2 ? '#ecf8f5' : "#ffffff"};
    color: ${props=>props.index !== 2 ? '#6ec4ca' : "#78c7cc"};
    padding: 5px 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 11px;
`;