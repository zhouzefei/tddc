import { Tooltip, Icon, Table, Row, Empty, Tag } from 'antd';
import { Ellipsis } from 'tntd';
import AHref from '../AHref';
import './index.less';

export const ReferenceInfo = (props) => {
  const { referenceData = [], orgMap = {}, appList = [], description = '', unmountHandle, imageStyle = {} } = props;
  return (
    <div className="reference-body">
      {!referenceData?.length && (
        <Empty
          description={description || '暂无数据'}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          imageStyle={{ marginTop: 120, ...imageStyle }}
        />
      )}
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
              if (c.dataIndex === goName && record?.goLink) {
                return (
                  <AHref href={record?.goLink} target="_blank" unmountHandle={unmountHandle}>
                    <Tooltip title={content} placement="topLeft">
                      {content || '- -'}
                    </Tooltip>
                  </AHref>
                );
              }
              if (c.dataIndex === goName) {
                return <Ellipsis copyable={true}>{content}</Ellipsis>;
              }
              if (i === 0 && record?.referenceCheckType) {
                let checkObj;
                if (record?.referenceCheckType === 'WEAK') {
                  checkObj = {
                    name: '弱引用',
                    className: 'refer-tag-weak',
                  };
                }
                if (record?.referenceCheckType === 'STRONG') {
                  checkObj = {
                    name: '强引用',
                    className: 'refer-tag-strong',
                  };
                }
                return (
                  <Tooltip placement="topLeft" title={content}>
                    {checkObj && <span className={`refer-tag ${checkObj.className}`}>{checkObj.name}</span>}
                    {content || '- -'}
                  </Tooltip>
                );
              }
              return (
                <Tooltip placement="topLeft" title={content}>
                  {content || '- -'}
                </Tooltip>
              );
            };
            if (i === columns?.length - 1) {
              newC.fixed = 'right';
            }
            if (i === 0) {
              newC.width = 180;
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
                  <Icon type="info-circle" className="ml-6" />
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
                  x: (renderColumns.length - 1) * 140 + 40,
                }}
                rowKey={(e, i) => `${dIndex}_${i}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
