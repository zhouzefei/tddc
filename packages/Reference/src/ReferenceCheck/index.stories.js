import { Button } from 'antd';
import React from 'react';

import { ReferenceCheck } from './index';
import ReferenceCheckDoc from './index.mdx';

export default {
  title: '关联引用/关联检查',
  component: ReferenceCheck,
  parameters: {
    docs: {
      page: ReferenceCheckDoc,
    },
  },
};

export const ReferenceCheckTemplate = () => {
  const confirmClick = () => {
    ReferenceCheck({
      rq: () => {
        return new Promise((resolve) => {
          resolve({
            success: true,
            data: {
              type: 'WEAK',
              result: [
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
                },
              ],
            },
          });
        });
      },
      appList: [],
    });
  };
  return <Button onClick={confirmClick}>关联检查</Button>;
};

ReferenceCheckTemplate.story = {
  name: '关联检查',
};
