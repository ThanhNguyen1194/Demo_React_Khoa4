import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
// import { Footer } from 'antd/lib/layout/layout';

const { Header, Footer, Sider, Content } = Layout;







export const UserLoginTemplate = (props) => {
    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            {/* <Layout>
                <Sider width={window.innerWidth / 2} style={{ height: window.innerHeight, backgroundImage: 'url(https://picsum.photos/500)' }}>
                </Sider>
                <Content>
                    <Component />
                </Content>
            </Layout> */}
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