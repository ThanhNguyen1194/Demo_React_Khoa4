import React from 'react'
import { Table, Tag, Space, Button, Avatar, Popconfirm, message, Popover, AutoComplete } from 'antd';


export default function userManagement() {
  return (
    <div className="container-fluid m-5">
    <h3>User Management</h3>
    <Space style={{ marginBottom: 16 }}>
       
    </Space>
    <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
</div>
  )
}
