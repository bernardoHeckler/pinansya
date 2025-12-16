import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 50px;`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #000;
    margin-bottom: 15px;
`;


export const SubmitButton = styled.TouchableOpacity`
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 15px;
`;

export const LinkText = styled.Text`
    color: #171717;
`;  