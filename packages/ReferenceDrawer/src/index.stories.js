// ReferenceDrawer.stories.js|jsx

import React from 'react';

import { ReferenceDrawer } from './index';

export default {
  title: 'ReferenceDrawer',
  component: ReferenceDrawer,
};

const Template = (args) => <ReferenceDrawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
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
          org: '同盾科技',
          app: '天策交易',
          goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone',
        },
      ],
      tips: '注意流模式策略判断体现在过程判断的适配的字段',
      title: '被应用策略【运行区】',
    },
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
          org: '同盾科技',
          app: '天策交易',
          goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone',
        },
      ],
      tips: '注意流模式策略判断体现在过程判断的适配的字段',
      title: '被应用策略【运行区】',
    },
  ],
  visible: true,
};
