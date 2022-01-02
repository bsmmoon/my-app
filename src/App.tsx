import React from 'react';
import { useAppSelector } from './app/hooks';
import { Navigation } from './features/navigation/Navigation';
import { getCurrentNavigation } from './features/navigation/navigationSlice';
import './App.css';

import { Layout } from 'antd';
import { Counter } from './features/counter/Counter';
import { Signin } from './features/signin/Signin';
const { Header, Footer, Content } = Layout;

function App() {
  const currentNavigation = useAppSelector(getCurrentNavigation);

  return (
    <>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {currentNavigation !== "counter" ? "" : <Counter />}
          {currentNavigation !== "signin" ? "" : <Signin />}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          footer
        </Footer>
      </Layout>
    </>
  );
}

export default App;
