import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { WhiteSpace } from 'antd-mobile';
import ToucherListComponent from '@/components/ToucherList';
import router from 'umi/router';

class ToucherList extends PureComponent {
  componentDidMount() {}

  addToucher = () => {
    console.log('添加触达号');
    router.push('/toucherManage');
  };

  render() {
    return (
      <div>
        <WhiteSpace size="md" />
        <Button type="default" icon="plus" block onClick={this.addToucher}>
          新增触达号
        </Button>
        <WhiteSpace size="md" />
        <ToucherListComponent />
      </div>
    );
  }
}

export default ToucherList;
