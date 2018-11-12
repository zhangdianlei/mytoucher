import React from 'react';
import { List, InputItem } from 'antd-mobile';
import { Button } from 'antd';
import router from 'umi/router';

// import { createForm } from 'rc-form';

// const Item = List.Item;

class LoginInput extends React.Component {
  state = {};

  loginSubmit = () => {
    router.push('/toucherList');
  };

  render() {
    return (
      <div>
        <List>
          <InputItem
            style={{ color: '#595959' }}
            clear
            onErrorClick={() => {}}
            placeholder="请输入手机号"
          >
            手机号
          </InputItem>

          <InputItem
            style={{ color: '#595959' }}
            clear
            onErrorClick={() => {}}
            placeholder="请输入验证码"
          >
            验证码
          </InputItem>
        </List>

        <Button
          type="default"
          style={{ marginTop: 10, color: '#595959' }}
          size="large"
          block
          onClick={this.loginSubmit}
        >
          登录
        </Button>
      </div>
    );
  }
}

export default LoginInput;
