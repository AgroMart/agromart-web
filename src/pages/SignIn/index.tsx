import React from 'react';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background, Text } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={ logoImg } alt="Agromart"/>
      <Text> AgroMart </Text>

      <form>
        <h1>Faça seu login</h1>

        <Input name="email" icon={ FiMail } placeholder="E-mail"/>

        <Input name="password" icon={ FiLock } type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

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