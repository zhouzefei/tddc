import ReactDOM from 'react-dom';
import { Modal, Button, Alert, message } from 'antd';
import PropTypes from "prop-types";
import { ReferenceInfo } from "../ReferenceInfo";

const ReferenceCheck = (props) => {
    const { rq, orgMap={}, appList=[]} = props || {};
    const appendModal = (resolve, {type, result: referenceData = []}) => {
        const modalWrap = document.createElement('div');
        const removeModal = ()=>{
            modalWrap && modalWrap.parentNode.removeChild(modalWrap);
        };
        ReactDOM.render(
            <Modal
                title="关联引用查看"
                visible={true}
                width={1000}
                destroyOnClose
                getContainer={modalWrap}
                onCancel={removeModal}
                footer={[
                    <Button key="back" onClick={removeModal}>
                        取消
                    </Button>,
                    type === 'WEAK' &&
                    <Button key="submit" type="primary" onClick={()=>{resolve(type);}}>
                        下一步
                    </Button>
                ]}
            >
                {
                    type === 'WEAK' &&
                    <Alert type="warning" message="存在弱引用关系，谨慎操作"/>
                }
                {
                    type === 'STRONG' &&
                    <Alert type="error" message="存在强引用关系，禁止操作"/>
                }
                <div className="relation-reference-detail">
                    <ReferenceInfo
                        referenceData={referenceData}
                        orgMap={orgMap}
                        appList={appList}
                    />
                </div>
            </Modal>,
            modalWrap
        );
        document.body.appendChild(modalWrap);

    };
    if(rq && typeof rq==="function"){
        return new Promise((resolve, reject)=>{
            return rq().then(res=>{
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
    }else{
        message.error("请提供一个可靠的查询");
    }
    
};

ReferenceCheck.propTypes={
    rq: PropTypes.func,
    orgMap: PropTypes.object,
    appList: PropTypes.array
};
ReferenceCheck.defaultProps={
    orgMap:{},
    appList: []
};
export {
    ReferenceCheck
};