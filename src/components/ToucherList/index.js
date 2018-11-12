import React from 'react';
import { ListView } from 'antd-mobile';
import { Card, Icon, Avatar, Skeleton } from 'antd';

const data = [
  {
    img: 'https://ws3.sinaimg.cn/large/006tNbRwly1fx5bei3hwlj305w05wjry.jpg',
    title: '统帅',
    des:
      '统帅电器是海尔集团在互联网背景下，继海尔、卡萨帝之后战略布局的年轻化品牌。统帅电器定位 “轻时尚家电开创者”',
  },
  {
    img: 'https://ws3.sinaimg.cn/large/006tNbRwly1fx5bei0rv7j308o08owfx.jpg',
    title: '日日顺',
    des:
      '日日顺是海尔集团旗下综合服务品牌，以诚信为核心，以社群为基本单元，致力成为物联网时代开放的引领平台',
  },
  {
    img: 'https://ws4.sinaimg.cn/large/006tNbRwly1fx5bei6wwij307y080mxk.jpg',
    title: '海尔',
    des:
      '海尔秉承锐意进取的海尔文化，不拘泥于现有的家电行业的产品与服务形式，在工作中不断求新求变，积极拓展业务新领域，开辟现代生活解决方案的新思路、新技术、新产品、新服务',
  },
];
const NUM_ROWS = 3;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

const { Meta } = Card;

class ToucherList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      loading: false,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    //
    // this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.rData = { ...this.rData, ...genData(++pageIndex) };
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 1000);
    //
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div>
          <Card
            actions={[
              <a href="javascript:;">
                <Icon type="compass" style={{ marginRight: 10 }} />
                预览
              </a>,
              <a href="javascript:;">
                <Icon type="setting" style={{ marginRight: 10 }} />
                管理
              </a>,
            ]}
          >
            <Skeleton loading={this.state.loading} avatar active>
              <Meta
                avatar={<Avatar src={obj.img} shape={'square'} size={'large'} />}
                title={obj.title}
                description={obj.des}
              />
            </Skeleton>
          </Card>
        </div>
      );
    };
    return (
      <ListView
        ref={el => (this.lv = el)}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span style={{ padding: 10, textAlign: 'center', margin: 10 }} />}
        // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
        //   {this.state.isLoading ? 'Loading...' : 'Loaded'}
        // </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => {
          console.log('scroll');
        }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default ToucherList;
