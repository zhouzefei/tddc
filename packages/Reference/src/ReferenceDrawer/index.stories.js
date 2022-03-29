import { Button } from "antd";
import React, { useState } from 'react';

import { ReferenceDrawer } from './index';
import ReferenceDrawerDoc from "./index.mdx";

export default {
  title: '关联引用/关联抽屉',
  component: ReferenceDrawer,
  parameters: {
    docs: {
      page: ReferenceDrawerDoc,
    },
  },
};

export const DrawerTemplate = () => {
  const [visible,setVisible] = useState(false);
  return (
      <>
        <Button onClick={()=>setVisible(true)}>查看引用</Button>
        <ReferenceDrawer 
          title="查看关联引用"
          visible={visible}
          onClose={()=>setVisible(false)}
          data={[
            {
              columns: [
                {
                  title: '策略名称',
                  dataIndex: 'name',
                },
                {
                  title: '策略标识',
                  dataIndex: 'code',
                },
                {
                  title: '策略名称',
                  dataIndex: 'version',
                },
                {
                  title: '所属机构',
                  dataIndex: 'org',
                },
                {
                  title: '所属应用',
                  dataIndex: 'app',
                },
              ],
              goName: 'code',
              rows: [
                {
                  name: '策略A',
                  code: 'policy_phone',
                  version: 'v2',
                  org: 'TongDun',
                  app: 'TEST',
                  goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone',
                },
              ],
              tips: '注意流模式策略判断体现在过程判断的适配的字段',
              title: '被应用策略【运行区】',
            }
          ]}
        />
      </>
  );
};

DrawerTemplate.story={
  name:"关联抽屉"
};
