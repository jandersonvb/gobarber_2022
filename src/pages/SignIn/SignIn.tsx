import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './SignIn.styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="http://">Esqueci minha senha</a>
        </form>

        <a href="http://">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export { SignIn };
