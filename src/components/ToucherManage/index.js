import React from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ToucherManage extends React.Component {
  state = {
    loading: false,
  };


  render(){

    return (
      <div>
        <List>
          <InputItem
            style={{ color: '#595959' }}
            clear
            onErrorClick={() => {}}
            placeholder="输入标题"
          >
            标题：
          </InputItem>

          <InputItem
            style={{ color: '#595959' }}
            clear
            onErrorClick={() => {}}
            placeholder="输入描述"
          >
            描述：
          </InputItem>

          <Item>
            <div>
              LOGO
            </div>
          </Item>

          <Item>
            <div>
              背景
            </div>
          </Item>

          <Item>
            <div>
              管理员
            </div>
          </Item>
          <WhiteSpace />

          <Item>
            <div style={{fontSize:"14px", color:"#595959"}}>
              我的服务
            </div>
          </Item>

          <List>
            <Item extra="" arrow="horizontal" onClick={() => {}} align="middle" thumb="https://ws1.sinaimg.cn/large/006tNbRwly1fx547tdf8bj305a058wge.jpg" multipleLine>
              互动吧
              <Brief>与用户零距离沟通</Brief>
            </Item>
          </List>


        </List>

      </div>
    );
  }
}

export default ToucherManage;
