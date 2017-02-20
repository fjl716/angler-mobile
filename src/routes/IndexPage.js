import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import { Tabs,Button,Flex,WhiteSpace } from 'antd-mobile';
import remoting from '../angler/remoting';
import { Modal} from 'antd-mobile';
const alert = Modal.alert;

const TabPane = Tabs.TabPane;
function IndexPage({ dispatch ,user}) {
  return (
    <div className={styles.normal}>
      <Tabs defaultActiveKey="1" onChange={(key) => {
        console.log(key)
      }}>
        <TabPane tab="数据库操作" key="1">
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/insert',payload: {user:'fjl',pass:'pass'},isSend:true})}}>insert</Button>
            </Flex.Item>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/delete',payload: {user:'fjl'},isSend:true})}}>delete</Button>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/update',payload: {query:{user:'fjl'},set:{pass:'123456'}},isSend:true})}}>update</Button>
            </Flex.Item>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/push->arr',payload: {query:{user:'fjl'},object:{group:'123456'}},isSend:true})}}>push</Button>
            </Flex.Item>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/pop->arr',payload: {query:{user:'fjl'},object:{group:'123456'}},isSend:true})}}>pop</Button>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/get',payload: {user:'fjl'},isSend:true})}}>get</Button>
            </Flex.Item>

            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/getsimple',payload: {user:'fjl'},isSend:true})}}>get simple</Button>
            </Flex.Item>

            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'user/get->pass',payload: {user:'fjl'},isSend:true})}}>get property</Button>
            </Flex.Item>
          </Flex>
        </TabPane>
        <TabPane tab="Task测试" key="2">

          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
            <Button onClick={()=>{dispatch({type: 'task/tick',payload: {},isSend:true})}}>启动tick任务</Button>
            </Flex.Item>
            <Flex.Item>
            <Button onClick={()=>{dispatch({type: 'task/retry',payload: {},isSend:true})}}>启动retry任务</Button>
            </Flex.Item>
          </Flex>

          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Button onClick={()=>{dispatch({type: 'task/data',payload: {data:(`${Math.random()}`.substr(2))},isSend:true})}}>发送任务数据</Button>
            </Flex.Item>
          </Flex>
        </TabPane>
        <TabPane tab="Rpc调用测试" key="3">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            <Button onClick={()=>{
              const obj1 = remoting.create('1');
              obj1.sum(1,2,3,function (result) {
                alert(`返回结果`,`obj1.sum(1,2,3)=${result}`);
              })
            }}>Test RPC</Button>
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
