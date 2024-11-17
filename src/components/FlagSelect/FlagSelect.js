import React from 'react';
import { Select } from "antd";

function FlagSelect() {
  return <Select
     defaultValue='english'
     style={{
       width: 64,
     }}
     options={[
       {
         value: 'french',
         label: '🇫🇷',
       },
       {
         value: 'english',
         label: '🇬🇧',
       },
     ]}
  />;
}

export default FlagSelect;
