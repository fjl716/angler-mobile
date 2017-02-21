import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import { Tabs,Button,Flex,WhiteSpace,Modal , Accordion } from 'antd-mobile';
import remoting from '../angler/remoting';
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
          <Accordion>
            <Accordion.Panel header="基本操作">
              <WhiteSpace size="lg" />
              <Flex>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/insert',payload: {name:'A1',index:1},isSend:true})}}>insert</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/delete',payload: {name:'A1'},isSend:true})}}>delete</Button>
                </Flex.Item>
              </Flex>
              <WhiteSpace size="lg" />
              <Flex>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/update',payload: {query:{name:'A1'},set:{index:2}},isSend:true})}}>update</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/push>arr',payload: {query:{name:'A1'},object:{sub:'123456'}},isSend:true})}}>push</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/pop>arr',payload: {query:{name:'A1'},object:{sub:'123456'}},isSend:true})}}>pop</Button>
                </Flex.Item>
              </Flex>
            </Accordion.Panel>
            <Accordion.Panel header="查询操作">
              <WhiteSpace size="lg" />
              <Flex>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/get',payload: {name:'A1'},isSend:true})}}>get</Button>
                </Flex.Item>

                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/getsimple',payload: {name:'A1'},isSend:true})}}>simple</Button>
                </Flex.Item>

                <Flex.Item>
                  <Button type="primary" onClick={()=>{dispatch({type: 'region/get>pass',payload: {name:'A1'},isSend:true})}}>property</Button>
                </Flex.Item>
              </Flex>
            </Accordion.Panel>
            <Accordion.Panel header="关联操作">
              <WhiteSpace size="lg" />
              <Flex>
                <Flex.Item>
                  <Button type="primary" onClick={()=> {
                    dispatch({type: 'group/insert', payload: {name: 'test1'}, isSend: true});
                    dispatch({type: 'user/insert', payload: {name: 'fjl', pass: '123', age: 1}, isSend: true});
                  }}>init</Button>
                </Flex.Item>
              </Flex>

              <WhiteSpace size="lg" />
              <Flex>
                <Flex.Item>
                  <Button type="primary" onClick={()=> {
                    dispatch({type: 'group/push->users', payload: {query:{name:'test1'},object:{name: 'fjl'}}, isSend: true});
                  }}>push simple</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button type="primary" onClick={()=> {
                    dispatch({type: 'user/update', payload: {query:{name:'fjl'},set:{age:2}}, isSend: true});
                  }}>change</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button type="primary" onClick={()=>{
                    dispatch({type: 'user/delete',payload: {name:'fjl'},isSend:true})
                  }}>remove</Button>
                </Flex.Item>
              </Flex>
            </Accordion.Panel>
            <Accordion.Panel header="Watcher操作">

            </Accordion.Panel>
          </Accordion>
        </TabPane>
        <TabPane tab="Task测试" key="2">

          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
            <Button type="primary" onClick={()=>{dispatch({type: 'task/tick',payload: {},isSend:true})}}>启动tick任务</Button>
            </Flex.Item>
            <Flex.Item>
            <Button type="primary" onClick={()=>{dispatch({type: 'task/retry',payload: {},isSend:true})}}>启动retry任务</Button>
            </Flex.Item>
          </Flex>

          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Button type="primary" onClick={()=>{dispatch({type: 'task/data',payload: {data:(`${Math.random()}`.substr(2))},isSend:true})}}>发送任务数据</Button>
            </Flex.Item>
          </Flex>
        </TabPane>
        <TabPane tab="Rpc调用测试" key="3">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            <Button type="primary" onClick={()=>{
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
