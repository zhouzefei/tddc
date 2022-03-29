import { Button } from "antd";
import React from 'react';

import { ReferenceCheck } from "./index";
import ReferenceCheckDoc from "./index.mdx";

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
  const confirmClick = ()=>{
    ReferenceCheck({
      rq: ()=>{
        return new Promise(resolve=>{
          resolve({
            success:true,
            data:{
              type:"WEAK"
            }
          });
        });
      },
      appList:[]
    });
  };
  return (
    <Button onClick={confirmClick}>关联检查</Button>
  );
};

ReferenceCheckTemplate.story={
  name:"关联检查"
};
