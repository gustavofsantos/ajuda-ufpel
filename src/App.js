import React from 'react';
import { Tabs, Layout } from 'antd';
import BodyRuHoje from './components/BodyRuHoje';
import BodyOnibus from './components/BodyOnibus';

import './App.css';

class App extends React.Component {
  state = {
    titulo: 'Ajuda UFPEL!'
  };

  onTabChange (key) {
    console.log(key);
  }

  render () {
    const TabPane = Tabs.TabPane;
    const { Header, Content } = Layout;

    return (
      <Layout className="layout">
        <Header style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
          <div className='logo'>
            {this.state.titulo}
          </div>
        </Header>
        <Tabs defaultActiveKey='1' onChange={this.onTabChange}>
          <TabPane tab='Onibus' key='1'>
            <Content style={{ padding: '0 2em' }}>
              <BodyOnibus />
            </Content>
          </TabPane>
          <TabPane tab='RU' key='2'>
            <Content style={{ padding: '0 2em' }}>
              <BodyRuHoje />
            </Content>
          </TabPane>
        </Tabs>
      </Layout>
    );
  }
}

export default App;
