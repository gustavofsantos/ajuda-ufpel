import React from 'react';
import { Card, List } from 'antd';

export default class BodyOnibus extends React.Component {
    state = {
        mensagem: null,
        dadoAtual: false,
        horarios: ['08:00', '09:00', '10:00'],
        proximoBus: '13:30'
    }

  render () {
    return (
      <div>
        <Card title="Próximo ônibus">
          <h5>{this.state.proximoBus}</h5>
        </Card>

        <List
          header={<div>Outros horários</div>}
          bordered
          dataSource={this.state.horarios}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}
