import React from 'react'
import { Table, Tag, Space, Button, Avatar, Popconfirm, message, Popover, AutoComplete } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function userManagement() {

    const projectList = useSelector(state => state.UserLoginCyberBugsReducer.arrUser);
    
    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });


    const handleChange = (pagination, filters, sorter) => {
        // console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (item2, item1) => {
                return item2.id - item1.id;
            },
            sortDirections: ['descend'],

        },
        {
            title: 'projectName',
            dataIndex: 'projectName',
            key: 'projectName',
            render: (text,record,index) => {
                return <NavLink to={`/projectdetail/${record.id}`}> {text}</NavLink>
            },
            sorter: (item2, item1) => {
                let projectName1 = item1.projectName?.trim().toLowerCase();
                let projectName2 = item2.projectName?.trim().toLowerCase();
                if (projectName2 < projectName1) {
                    return -1;
                }
                return 1;
            },


        },
    ]
  return (
    <div className="container-fluid m-5">
    <h3>User Management</h3>
    <Space style={{ marginBottom: 16 }}>
       
    </Space>
    <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
</div>
  )
}
