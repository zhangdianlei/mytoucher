import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';
import router from 'umi/router';
import { Row, Col } from 'antd';


class Welcome extends PureComponent {

  componentDidMount() {
    console.log('1');
  };

  welcome = () => {
    router.push('/me');
  };

  render() {
    return (
      <div>
        <Row>
          <Col span="24">
            <Button block type="default" onClick={this.welcome}>
            欢迎
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Welcome;
