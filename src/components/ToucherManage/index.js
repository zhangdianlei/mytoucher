import React from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import {List as AndtList, Avatar, Icon, Button } from 'antd'

const Item = List.Item;
const Brief = Item.Brief;

class ToucherManage extends React.Component {
  state = {
    loading: false,
    data : [
      {
        id: '1',
        name: '互动吧',
        des: '和用户零距离沟通',
        avatar: 'https://ws3.sinaimg.cn/large/006tNbRwly1fx5ha8f9lfj304404475a.jpg',
      },
      {
        id: '2',
        name: '保险',
        des: '保险服务',
        avatar: 'https://ws1.sinaimg.cn/large/006tNbRwly1fx5ha8c97pj303w03yq3v.jpg',
      },
      {
        id: '3',
        name: '服务店',
        des: '产品周边服务',
        avatar: 'https://ws3.sinaimg.cn/large/006tNbRwly1fx5ha896i0j304o04i75n.jpg',
      },
    ],
    services : [
      {
        id: '1',
        name: '推荐服务1',
        des: '贴身零距离',
        avatar: 'https://ws1.sinaimg.cn/large/006tNbRwly1fx547tdf8bj305a058wge.jpg',
      },
      {
        id: '1',
        name: '推荐服务2',
        des: '贴身零距离',
        avatar: 'https://ws1.sinaimg.cn/large/006tNbRwly1fx5ha8c97pj303w03yq3v.jpg',
      },
      {
        id: '1',
        name: '推荐服务3',
        des: '贴身零距离',
        avatar: 'https://ws4.sinaimg.cn/large/006tNbRwly1fx5bei6wwij307y080mxk.jpg',
      },
      {
        id: '1',
        name: '推荐服务4',
        des: '贴身零距离',
        avatar: 'https://ws1.sinaimg.cn/large/006tNbRwly1fx547tdf8bj305a058wge.jpg',
      },

    ]
  };


  render(){

    return (
      <div>

        <div style={{position:'fixed', width:'100%', left:0, top:0, right: 0, zIndex: 1000, textAlign: 'center', backgroundColor: "#ffffff"}}>
            <Button style={{margin:'5px'}} ><Icon type="delete" />删除</Button>
            <Button style={{margin:'5px'}} ><Icon type="share-alt" />分享</Button>
            <Button style={{margin:'5px'}} ><Icon type="compass" />预览</Button>
        </div>


        <List style={{marginTop: "50px"}}>
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

        </List>

        <Item>
          <div style={{fontSize:"14px", color:"#595959"}}>
            我的服务
          </div>
        </Item>

        <AndtList
          dataSource={this.state.data}
          renderItem={item => (
            <AndtList.Item key={item.id} style={{backgroundColor: "#ffffff", paddingLeft: "10px", paddingRight: "20px"}}>
              <AndtList.Item.Meta
                avatar={<Avatar src={item.avatar} shape='square' />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.des}
              />
              <div><Icon type="delete" /></div>
            </AndtList.Item>
          )}
        >
        </AndtList>

        <WhiteSpace size="lg" />
        <Item>
          <div style={{fontSize:"14px", color:"#595959"}}>
            可选服务
          </div>
        </Item>

        <AndtList
          dataSource={this.state.services}
          renderItem={item => (
            <AndtList.Item key={item.id} style={{backgroundColor: "#ffffff", paddingLeft: "10px", paddingRight: "20px"}}>
              <AndtList.Item.Meta
                avatar={<Avatar src={item.avatar} shape='square' />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.des}
              />
              <div><Icon type="delete" /></div>
            </AndtList.Item>
          )}
        >
        </AndtList>

      </div>
    );
  }
}

export default ToucherManage;
