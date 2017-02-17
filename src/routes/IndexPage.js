import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import { Tabs,Button } from 'antd-mobile';
import remoting from '../angler/remoting';

const TabPane = Tabs.TabPane;
function IndexPage({ dispatch ,user}) {
  return (
    <div className={styles.normal}>
      <Button onClick={()=>{

        const obj1 = remoting.create('1');
        obj1.sum(1,2,3,function (result) {
          console.log(result);
        })

      }}>Test RPC</Button>
      <Button onClick={()=>{dispatch({type: 'user/login',payload: {user:'fjl',pass:'pass'},isSend:true})}}>Login 启动2个任务</Button>
      <Button onClick={()=>{dispatch({type: 'user/data',payload: {user:'fjl',pass:'pass'},isSend:true})}}>返回任务信息data</Button>
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
