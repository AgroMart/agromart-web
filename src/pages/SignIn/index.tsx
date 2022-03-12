import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'
import { Container, Content, Background, Text } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={ logoImg } alt="Agromart"/>
      <Text> AgroMart </Text>

      <form>
        <h1>Faça seu login</h1>

        <input placeholder="E-mail"/>

        <input type="password" placeholder="Senha"/>

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn/>
        Criar conta
      </a>
    </Content>
    <Background/>
  </Container>
);

export default SignIn;