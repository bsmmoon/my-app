import { Button, Input, Space, Table, Tag } from 'antd';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchHistoryEntries, getHistoryEntries } from './historySlice';
   
function tableColumns(colourMapping: { [key: string]: string }) {
  return [
    {
      title: 'Index',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map(tag => {
            return (
              <Tag color={colourMapping[tag]} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },  
  ];
}

export function History() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHistoryEntries())
  }, [dispatch])

  const dataSource = useAppSelector(getHistoryEntries).map(historyEntry => {
    return { ...historyEntry, key: historyEntry.id }
  });

  const colourMapping: { [key: string]: string } = {
    finance: 'yellow',
    date: 'red',
  }
  
  const columns = tableColumns(colourMapping)
  
  return <>
    <Space direction='vertical' style={{width: '100%'}}>
      <Input.Group compact>
        <Input style={{ width: 'calc(100% - 128px)' }} placeholder='New Entry' />
        <Button style={{ width: '128px' }} type='primary'>Submit</Button>
      </Input.Group>
      <Table dataSource={dataSource} columns={columns} />
    </Space>
  </>
}