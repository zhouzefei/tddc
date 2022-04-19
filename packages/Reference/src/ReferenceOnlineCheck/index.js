import ReactDOM from 'react-dom';
import { Button, Collapse, message, Tag, Tooltip } from 'antd';
import { Modal } from 'tntd';
import { ReferenceInfo } from '../ReferenceInfo';
import './index.less';

const { Panel } = Collapse;

const ReferenceOnlineCheck = (props) => {
  const {
    title = '上线校验',
    rq,
    checkReferResponse,
    orgMap = {},
    appList = [],
    value = undefined,
    onChange = () => {},
  } = props || {};

  const appendModal = (resolve, referenceData = []) => {
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
        ]}
      >
        <div className="reference-online-check-modal">
          <Collapse defaultActiveKey={value || [0]} onChange={onChange}>
            {referenceData?.map((d, i) => {
              let headerTxt = d?.componentName;
              if (d?.componentId) {
                headerTxt += `[${d?.componentId}]`;
              }
              return (
                <Panel
                  header={
                    <div className="refer-panel-head">
                      <Tooltip title={headerTxt} placement="topLeft">
                        <span>{headerTxt}</span>
                      </Tooltip>
                      <Tag color="green">V{d?.componentVersion}</Tag>
                    </div>
                  }
                  key={i}
                >
                  <ReferenceInfo
                    unmountHandle={removeModal}
                    referenceData={d?.result || []}
                    orgMap={orgMap}
                    appList={appList}
                  />
                </Panel>
              );
            })}
          </Collapse>
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
          if (!!data?.length) {
            appendModal(resolve, data);
          } else {
            resolve(data);
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
export { ReferenceOnlineCheck };
