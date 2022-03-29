import { useEffect, useState } from 'react';
import { Drawer, Spin, Tooltip } from 'antd';
import PropTypes from "prop-types";
import { ReferenceInfo } from "../ReferenceInfo";
import './index.less';

const ReferenceDrawer = (props) => {
  const { fetchReference, data = null, visible, onClose, title, orgMap = {}, appList = [] } = props;
  const [referenceData, setReferenceData] = useState(data);
  const [referenceLoad, setReferenceLoad] = useState(!data);
  useEffect(() => {
    if (visible && fetchReference) {
      fetchReference()
        .then((res) => {
          if (res?.success && res?.data) {
            setReferenceData(res?.data || null);
          }
        })
        .finally(() => {
          setReferenceLoad(false);
        });
    }
  }, [visible, fetchReference]);

  return (
    <Drawer
      className='reference-drawer'
      width={650}
      onClose={onClose}
      visible={visible}
      title={<Tooltip title={title}>{title || ''}</Tooltip>}
    >
      {referenceLoad && <Spin className="globalSpin" tip="查询中..."></Spin>}
      {
        !referenceLoad && 
        <div className="drawer-reference-body">
          <ReferenceInfo
            referenceData={referenceData||[]}
            appList={appList||[]}
            orgMap={orgMap||{}}
          />
        </div>
      }
    </Drawer>
  );
};
ReferenceDrawer.propTypes={
  title: PropTypes.string,
  data: PropTypes.array,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  fetchReference: PropTypes.func,
  orgMap: PropTypes.object,
  appList: PropTypes.array
};
ReferenceDrawer.defaultProps={
  title:"",
  data:null,
  visible: false,
  orgMap:{},
  appList: []
};
export {
  ReferenceDrawer
};