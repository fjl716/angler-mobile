import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import { Tabs,Button } from 'antd-mobile';

const TabPane = Tabs.TabPane;
let id = 0;
// id:id++,
function IndexPage({ dispatch ,user}) {
  return (
    <div className={styles.normal}>
      <Button onClick={()=>{dispatch({type: 'user/insert',payload: {user:'fjl',pass:'pass'},isSend:true})}}>Test</Button>
      {
        user.list.map(item=>{return <p key={item._id}>{item.user}</p>})
      }
      <Tabs defaultActiveKey="1" onChange={(key) => {
        console.log(key)
      }}>
        <TabPane tab="选项卡一" key="1">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            选项卡一内容
          </div>
        </TabPane>
        <TabPane tab="选项卡二" key="2">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            选项卡二内容
          </div>
        </TabPane>
        <TabPane tab="选项卡三" key="3">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            选项卡三内容
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({calendar,user}) {
  return {
    ...calendar,
    user
  };
}

export default connect(mapStateToProps)(IndexPage);
