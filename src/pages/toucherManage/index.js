import React, { PureComponent } from 'react';
import { Button, Toast } from 'antd-mobile';

class ToucherManage extends PureComponent {
  componentDidMount() {
    console.log('1');
  }

  showToast = () => {
    Toast.info('This is a toast tips !!!', 10);
  };

  render() {
    const { route } = this.props;
    return (
      <div>
        <Button type="default" onClick={this.showToast}>
          {route.title}
        </Button>
      </div>
    );
  }
}

export default ToucherManage;
