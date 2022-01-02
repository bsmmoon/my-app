import './App.css';

import { Layout } from 'antd';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { Counter } from './features/counter/Counter';
import { Navigation } from './features/navigation/Navigation';
import { getCurrentNavigation } from './features/navigation/navigationSlice';
import { User } from './features/user/User';
import { checkSignIn } from './features/user/userSlice';

const { Header, Footer, Content } = Layout;

function App() {
  const dispatch = useAppDispatch();

  const currentNavigation = useAppSelector(getCurrentNavigation);

  useEffect(() => {
    dispatch(checkSignIn())
  }, [dispatch])

  return (
    <>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {currentNavigation !== "counter" ? "" : <Counter />}
          {currentNavigation !== "signin" ? "" : <User />}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          footer
        </Footer>
      </Layout>
    </>
  );
}

export default App;
