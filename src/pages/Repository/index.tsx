import React, { useState, useEffect, useCallback } from 'react';
import { Header, HeaderContent, Profile, MenuButton, PowerButton } from '../Dashboard/styles'
import { Container, Logo } from './styles'
import logoImg from '../../assets/logo.svg';
import { IconContext } from 'react-icons';
import SideBar from '../../components/SideBar';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { AxiosPromise } from 'axios';

import { FiPower, FiMenu } from 'react-icons/fi' ;

const Repository: React.FC = () => {
  const { signOut, user } = useAuth();
  const [subscribers, setSubscribers] = useState<[]>();

  const getSubscribers = useCallback(async ():Promise<AxiosPromise> => {
    const response = await api.get(`${process.env.REACT_APP_ASSINANTES}?loja=1`);

    setSubscribers(response.data);
    return response;
  }, []);

  useEffect(() => {
    getSubscribers();
  },[])

  // const renderSubscribers = useCallback((subs) => {
  //   return (
  //       <NotificationsDashboard>
  //         <NotificationBox> { subs.id } </NotificationBox>
  //         <NotificationBox> { subs.nome } </NotificationBox>
  //         <NotificationBox> { subs.cestas_disponiveis } </NotificationBox>
  //         <NotificationBox> { subs.plano.nome } </NotificationBox>
  //         <NotificationBox> { subs.loja.nome } </NotificationBox>
  //       </NotificationsDashboard>
  //   )
  // }, []);

  const [openMenu, setOpenMenu] = useState(true);

  return(
    <Container>
      <SideBar toggle ={openMenu}/>
      <Header>
        <HeaderContent>
          <Logo src={ logoImg } alt="Agromart" />
          <IconContext.Provider value={{color: 'white'}}>
            <MenuButton onClick={() => setOpenMenu(!openMenu)}>
              <FiMenu size={40}/>
            </MenuButton>
          </IconContext.Provider>
          <Profile>
            <img 
              src="https://avatars.githubusercontent.com/u/22936236?v=4" 
              alt={user.username}
            />
            <div>
              <span>Bem-vindo,</span>
            <strong>{user.username.split(' ')[0]}</strong>
            </div>
          </Profile>
          <PowerButton type="button" onClick={ signOut } >
            <FiPower />
          </PowerButton>
        </HeaderContent>
      </Header>
      {/* {
        subscribers? subscribers.map(subs => {
          return renderSubscribers(subs)
        }) : null
      } */}
    </Container>
  );
};

export default Repository;