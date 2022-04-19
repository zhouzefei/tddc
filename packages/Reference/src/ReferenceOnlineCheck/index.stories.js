import { Button } from 'antd';
import React from 'react';

import { ReferenceOnlineCheck } from './index';
import ReferenceOnlineCheckDoc from './index.mdx';

export default {
  title: '关联引用/上线校验',
  component: ReferenceOnlineCheck,
  parameters: {
    docs: {
      page: ReferenceOnlineCheckDoc,
    },
  },
};

export const ReferenceCheckTemplate = () => {
  const confirmClick = () => {
    ReferenceOnlineCheck({
      rq: () => {
        return new Promise((resolve) => {
          resolve({
            success: true,
            data: [
              {
                componentId: 'fafdasfa',
                componentCode: '123',
                componentVersion: 1,
                componentName: '规则集1',
                result: [
                  {
                    title: '规则',
                    goName: 'code',
                    columns: [
                      {
                        title: '规则UUID',
                        dataIndex: 'id',
                      },
                      {
                        title: '规则名称',
                        dataIndex: 'name',
                      },
                      {
                        title: '所属规则集名称',
                        dataIndex: 'ruleSetName',
                      },
                      {
                        title: '所属规则集标识',
                        dataIndex: 'ruleSetCode',
                      },
                      {
                        title: '所属规则集版本',
                        dataIndex: 'ruleSetVersion',
                      },
                      {
                        title: '所属机构',
                        dataIndex: 'org',
                      },
                      {
                        title: '所属渠道',
                        dataIndex: 'app',
                      },
                    ],
                    rows: [
                      {
                        id: '057338121392460180c1120148f14e38',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=057338121392460180c1120148f14e38',
                      },
                      {
                        id: '10b6f8d4d1c848a4ab796f689611218f',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=10b6f8d4d1c848a4ab796f689611218f',
                      },
                      {
                        id: '2362b1f4877c45e4abf0e63ad4025072',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=2362b1f4877c45e4abf0e63ad4025072',
                      },
                      {
                        id: '275d92a1fca34b19bf577f2a22a52c0f',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=275d92a1fca34b19bf577f2a22a52c0f',
                      },
                      {
                        id: '2e201db8c20043c58effa29061f4167d',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=2e201db8c20043c58effa29061f4167d',
                      },
                      {
                        id: '370294573cad4cfb97fe6b3ceda28f2a',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=370294573cad4cfb97fe6b3ceda28f2a',
                      },
                      {
                        id: '3cf45956fc354378b24c5c5c9efba027',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=3cf45956fc354378b24c5c5c9efba027',
                      },
                      {
                        id: '4b27e81d1e0d471192bfe0662d2cd633',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=4b27e81d1e0d471192bfe0662d2cd633',
                      },
                      {
                        id: '51f46901d4b64939a9d2ba381c63f097',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=51f46901d4b64939a9d2ba381c63f097',
                      },
                      {
                        id: '5a94decb6e55438d8a33335357bbc672',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=5a94decb6e55438d8a33335357bbc672',
                      },
                      {
                        id: '6ef2709bcea148aeb2ec68c2c27292ab',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=6ef2709bcea148aeb2ec68c2c27292ab',
                      },
                      {
                        id: '71b1a9c4188a426fbb8619d507e9c3c5',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=71b1a9c4188a426fbb8619d507e9c3c5',
                      },
                      {
                        id: '96948e95ea794e9f97748c7c52f3b053',
                        name: '自定义规则',
                        ruleSetName: 'lduffy信贷规则集',
                        ruleSetCode: 'lduffy_credit_ruleset',
                        ruleSetVersion: 7,
                        org: 'TongDun',
                        app: 'TG02',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=96948e95ea794e9f97748c7c52f3b053',
                      },
                      {
                        id: '9ac3c460a8684345822769a253fe8a94',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=9ac3c460a8684345822769a253fe8a94',
                      },
                      {
                        id: '9af0ab4a309c4a88a8df2d5c6ba56ef2',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=9af0ab4a309c4a88a8df2d5c6ba56ef2',
                      },
                      {
                        id: 'c26f44b8498d438bb0d8fc8073492017',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=c26f44b8498d438bb0d8fc8073492017',
                      },
                      {
                        id: 'cc1e169ff8be47e99f40c07f494b5540',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=cc1e169ff8be47e99f40c07f494b5540',
                      },
                      {
                        id: 'deba84af2bd8400ca4285849909ca001',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=deba84af2bd8400ca4285849909ca001',
                      },
                      {
                        id: 'e8397e06dc6640c19298be18e9cb70ca',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=e8397e06dc6640c19298be18e9cb70ca',
                      },
                      {
                        id: 'f51896fa8f8c4960bfb547bbc41bf208',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f51896fa8f8c4960bfb547bbc41bf208',
                      },
                      {
                        id: 'f6439ab025d04f009d585232f8fff095',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f6439ab025d04f009d585232f8fff095',
                      },
                      {
                        id: 'f97a5727dc454b79b17d94f9852a445b',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f97a5727dc454b79b17d94f9852a445b',
                      },
                    ],
                  },
                ],
              },
              {
                componentId: 'fa12321fdasfa',
                componentCode: '124',
                componentVersion: 2,
                componentName: '规则集2',
                result: [
                  {
                    title: '规则',
                    goName: 'code',
                    columns: [
                      {
                        title: '规则UUID',
                        dataIndex: 'id',
                      },
                      {
                        title: '规则名称',
                        dataIndex: 'name',
                      },
                      {
                        title: '所属规则集名称',
                        dataIndex: 'ruleSetName',
                      },
                      {
                        title: '所属规则集标识',
                        dataIndex: 'ruleSetCode',
                      },
                      {
                        title: '所属规则集版本',
                        dataIndex: 'ruleSetVersion',
                      },
                      {
                        title: '所属机构',
                        dataIndex: 'org',
                      },
                      {
                        title: '所属渠道',
                        dataIndex: 'app',
                      },
                    ],
                    rows: [
                      {
                        id: '057338121392460180c1120148f14e38',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=057338121392460180c1120148f14e38',
                      },
                      {
                        id: '10b6f8d4d1c848a4ab796f689611218f',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=10b6f8d4d1c848a4ab796f689611218f',
                      },
                      {
                        id: '2362b1f4877c45e4abf0e63ad4025072',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=2362b1f4877c45e4abf0e63ad4025072',
                      },
                      {
                        id: '275d92a1fca34b19bf577f2a22a52c0f',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=275d92a1fca34b19bf577f2a22a52c0f',
                      },
                      {
                        id: '2e201db8c20043c58effa29061f4167d',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=2e201db8c20043c58effa29061f4167d',
                      },
                      {
                        id: '370294573cad4cfb97fe6b3ceda28f2a',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=370294573cad4cfb97fe6b3ceda28f2a',
                      },
                      {
                        id: '3cf45956fc354378b24c5c5c9efba027',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=3cf45956fc354378b24c5c5c9efba027',
                      },
                      {
                        id: '4b27e81d1e0d471192bfe0662d2cd633',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=4b27e81d1e0d471192bfe0662d2cd633',
                      },
                      {
                        id: '51f46901d4b64939a9d2ba381c63f097',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=51f46901d4b64939a9d2ba381c63f097',
                      },
                      {
                        id: '5a94decb6e55438d8a33335357bbc672',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=5a94decb6e55438d8a33335357bbc672',
                      },
                      {
                        id: '6ef2709bcea148aeb2ec68c2c27292ab',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=6ef2709bcea148aeb2ec68c2c27292ab',
                      },
                      {
                        id: '71b1a9c4188a426fbb8619d507e9c3c5',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=71b1a9c4188a426fbb8619d507e9c3c5',
                      },
                      {
                        id: '96948e95ea794e9f97748c7c52f3b053',
                        name: '自定义规则',
                        ruleSetName: 'lduffy信贷规则集',
                        ruleSetCode: 'lduffy_credit_ruleset',
                        ruleSetVersion: 7,
                        org: 'TongDun',
                        app: 'TG02',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=96948e95ea794e9f97748c7c52f3b053',
                      },
                      {
                        id: '9ac3c460a8684345822769a253fe8a94',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=9ac3c460a8684345822769a253fe8a94',
                      },
                      {
                        id: '9af0ab4a309c4a88a8df2d5c6ba56ef2',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=9af0ab4a309c4a88a8df2d5c6ba56ef2',
                      },
                      {
                        id: 'c26f44b8498d438bb0d8fc8073492017',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=c26f44b8498d438bb0d8fc8073492017',
                      },
                      {
                        id: 'cc1e169ff8be47e99f40c07f494b5540',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=cc1e169ff8be47e99f40c07f494b5540',
                      },
                      {
                        id: 'deba84af2bd8400ca4285849909ca001',
                        name: '名单规则_副本33',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=deba84af2bd8400ca4285849909ca001',
                      },
                      {
                        id: 'e8397e06dc6640c19298be18e9cb70ca',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=e8397e06dc6640c19298be18e9cb70ca',
                      },
                      {
                        id: 'f51896fa8f8c4960bfb547bbc41bf208',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f51896fa8f8c4960bfb547bbc41bf208',
                      },
                      {
                        id: 'f6439ab025d04f009d585232f8fff095',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f6439ab025d04f009d585232f8fff095',
                      },
                      {
                        id: 'f97a5727dc454b79b17d94f9852a445b',
                        name: '名单规则_副本',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f97a5727dc454b79b17d94f9852a445b',
                      },
                    ],
                  },
                ],
              },
            ],
          });
        });
      },
      appList: [],
      onChange: (d) => {
        console.log('d', d);
      },
    });
  };
  return <Button onClick={confirmClick}>上线校验</Button>;
};

ReferenceCheckTemplate.story = {
  name: '上线校验',
};
