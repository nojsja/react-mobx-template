import React, { Component } from 'react';
import SourceTree from 'react-treeview-semantic';

const treeData = [
  {
    name: 'level1',
    flag: 'base',
    children: [
      { name: 'level2-1' },
      {
        name: 'level2-2',
        children: [
          { name: 'level3-1', children: [{ name: 'level4-1', flag: 'table'}] },
          { name: 'level3-2', flag: 'file' },
          { name: 'level3-3', children: [{ name: 'level4-2', flag: 'table' }] },
        ]
      }
    ]
  },

  {
    name: 'long-name-long-name-long-name-long-name-long-name-',
    flag: 'base',
    children: [
      { name: 'level2-1' },
      {
        name: 'level2-2',
        children: [
          { name: 'level3-1',flag: 'file' },
          { name: 'level3-2', flag: 'file' }
        ]
      }
    ]
  }
];

export default class page1 extends Component {
  render() {
    return (
      <div style={{borderTop: 'solid 1px grey', marginTop: '1rem', paddingTop: '1rem'}}>
        <SourceTree
          setActiveItem={console.log}
          baseIcon={null}
          baseColor={null}
          checkable={true}
          singleChecked={true}
          treeData={treeData}
          getChecked={console.log}
        />
      </div>
    );
  }
}