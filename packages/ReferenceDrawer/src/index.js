import { useEffect, useState } from 'react';
import { Drawer, Spin, Tooltip, Icon, Table, Row } from 'antd';
import './index.less';

export const ReferenceDrawer = (props) => {
  const { fetchReference, data = null, visible, title, orgMap = {}, appList = [] } = props;
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
      width={650}
      // closable={false}
      onClose={() => {}}
      visible={visible || true}
      bodyStyle={{
        padding: 0,
      }}
    >
      {referenceLoad && <Spin className="globalSpin" tip="查询中..."></Spin>}
      {!referenceLoad && (
        <>
          {title && (
            <div className="drawer-reference-title">
              <Tooltip title={title}>{title || ''}</Tooltip>
            </div>
          )}
          <div className="drawer-reference-body">
            {referenceData?.map((d, dIndex) => {
              const { columns, goName } = d || {};
              let renderColumns = [];
              if (columns?.length) {
                renderColumns = columns?.map((c, i) => {
                  const newC = { ...c, width: 140, ellipsis: true };
                  newC.render = (t, record) => {
                    let content = t;
                    if (c.dataIndex === 'org') {
                      content = orgMap[t]?.name || t;
                    }
                    if (c.dataIndex === 'app') {
                      content = appList.find((a) => a.key === t)?.name || t;
                    }
                    if (c.dataIndex === goName) {
                      content = <a href={record?.goLink}>{t}</a>;
                    }
                    return <Tooltip title={t}>{content}</Tooltip>;
                  };
                  if (i === columns?.length - 1) {
                    newC.fixed = 'right';
                  }
                  return newC;
                });
              }
              return (
                <div className="reference-body-item">
                  <Row className="reference-body-title" type="flex" align="middle">
                    <span className="body-title-content">
                      <Tooltip title={d?.title} placement="topLeft">
                        {d?.title}
                      </Tooltip>
                    </span>
                    {d?.tips && (
                      <Tooltip title={d?.tips} placement="topLeft">
                        <Icon type="info-circle" />
                      </Tooltip>
                    )}
                  </Row>
                  {renderColumns?.length && (
                    <Table
                      bordered={false}
                      dataSource={d?.rows}
                      columns={renderColumns}
                      pagination={false}
                      scroll={{
                        x: renderColumns.length * 140,
                      }}
                      rowKey={(e, i) => `${dIndex}_${i}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </Drawer>
  );
};
