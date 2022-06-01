import ReactDOM from 'react-dom';
import { Button, Alert, message } from 'antd';
import { Modal } from 'tntd';
import { ReferenceInfo } from '../ReferenceInfo';
import './index.less';

const ReferenceCheck = (props) => {
  const {
    title = '引用关系查看',
    rq,
    checkReferResponse,
    orgMap = {},
    appList = [],
    weakMsg = '存在弱引用（被下线、禁用、待提交/上线、导入待提交/上线、暂存、保存等相关状态组件引用）关系，谨慎操作',
    strongMsg = '存在强引用（被上线、启用、上下线审批中和指标补数、指标数据准备等相关状态组件引用）关系，禁止操作',
  } = props || {};
  const appendModal = (resolve, { type, result: referenceData = [] }) => {
    const modalWrap = document.createElement('div');
    modalWrap.setAttribute('id', 'tddc-reference-check-modal');
    const removeModal = () => {
      const tddcModal = document.querySelectorAll('#tddc-reference-check-modal');
      if (tddcModal) {
        tddcModal.forEach((ele) => ele?.parentNode?.removeChild(ele));
      }
      modalWrap && modalWrap?.parentNode?.removeChild(modalWrap);
    };
    removeModal();
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
        <div className="reference-check-modal">
          {type === 'WEAK' && (
            <div className="mb10">
              <Alert
                type="warning"
                message={
                  weakMsg ||
                  '存在弱引用（被下线、禁用、待提交/上线、导入待提交/上线、暂存、保存等相关状态组件引用）关系，谨慎操作'
                }
              />
            </div>
          )}
          {type === 'STRONG' && (
            <div className="mb10">
              <Alert
                type="error"
                message={
                  strongMsg ||
                  '存在强引用（被上线、启用、上下线审批中和指标补数、指标数据准备等相关状态组件引用）关系，禁止操作'
                }
              />
            </div>
          )}
          <div className="relation-reference-detail">
            <ReferenceInfo
              referenceData={referenceData}
              orgMap={orgMap}
              appList={appList}
              unmountHandle={removeModal}
            />
          </div>
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
