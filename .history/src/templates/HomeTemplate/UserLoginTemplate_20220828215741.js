import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;







export const UserLoginTemplate = (props) => {
    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
    
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </>
    }} />

}