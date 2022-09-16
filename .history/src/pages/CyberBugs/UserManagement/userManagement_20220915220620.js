import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, Avatar, Popconfirm, message, Popover, AutoComplete } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GET_LIST_USER_SAGA } from '../../../redux/constants/Cyberbugs/UserConstatnts';


export default function UserManagement(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: GET_LIST_USER_SAGA})
    },[])

    const listUser = useSelector(state => state.UserLoginCyberBugsReducer.listUser);
    console.log(listUser);

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
            dataIndex: '',
            key: 'id',
            sorter: (item2, item1) => {
                return item2.id - item1.id;
            },
           

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          
            sorter: (item2, item1) => {
                let email1 = item1.email?.trim().toLowerCase();
                let email2 = item2.email?.trim().toLowerCase()

                if (email1 < email2) {
                    return -1;
                }
                return 1;
            },


        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'name',
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
    <Table columns={columns} rowKey={"id"} dataSource={listUser} onChange={handleChange} />
</div>
  )
}
