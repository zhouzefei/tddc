import ReactDOM from 'react-dom';
import { Modal, Button, Alert, message } from 'antd';
import { ReferenceInfo } from '../ReferenceInfo';
import './index.less';

const ReferenceCheck = (props) => {
  const {
    title = '引用关系查看',
    rq,
    checkReferResponse,
    orgMap = {},
    appList = [],
    weakMsg = '存在弱引用关系，谨慎操作',
    strongMsg = '存在强引用关系，禁止操作',
  } = props || {};
  const appendModal = (resolve, { type, result: referenceData = [] }) => {
    const modalWrap = document.createElement('div');
    const removeModal = () => {
      modalWrap && modalWrap.parentNode.removeChild(modalWrap);
    };
    ReactDOM.render(
      <Modal
        title={title}
        visible={true}
        width={1000}
        destroyOnClose
        getContainer={modalWrap}
        onCancel={removeModal}
        footer={[
          <Button key="back" onClick={removeModal}>
            取消
          </Button>,
          type === 'WEAK' && (
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                removeModal();
                resolve(type);
              }}
            >
              下一步
            </Button>
          ),
        ]}
      >
        {type === 'WEAK' && (
          <div className="mb10">
            <Alert type="warning" message={weakMsg || '存在弱引用关系，谨慎操作'} />
          </div>
        )}
        {type === 'STRONG' && (
          <div className="mb10">
            <Alert type="error" message={strongMsg || '存在强引用关系，禁止操作'} />
          </div>
        )}
        <div className="relation-reference-detail">
          <ReferenceInfo
            referenceData={[
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
            ]}
            orgMap={orgMap}
            appList={appList}
            unmountHandle={removeModal}
          />
        </div>
      </Modal>,
      modalWrap
    );
    document.body.appendChild(modalWrap);
  };
  if (rq && typeof rq === 'function') {
    return new Promise((resolve, reject) => {
      return rq().then((res) => {
        const { success, data } = res || {};
        if (success) {
          const { type } = data || {};
          if (type === 'NO_EXIST') {
            resolve(type);
          }
          if (['WEAK', 'STRONG'].includes(type)) {
            appendModal(resolve, data);
          }
        } else {
          reject('查询关联关系失败');
        }
      });
    });
  } else {
    message.error('请提供一个可靠的查询请求!!!');
  }
};
export { ReferenceCheck };
