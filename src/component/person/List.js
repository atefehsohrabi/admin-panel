import React,{Component} from 'react'
import request from '../tools/Request'
import {Table} from 'antd'



export default class Persons extends Component{
    state ={persons:[]}
    columns=[
        { key: 'id', dataIndex: 'id', title: 'شناسه'},
        {key: 'name', dataIndex: 'name', title: 'نام'},
        { key: 'username', dataIndex: 'username', title: 'نام کاربری'},
        { key: 'email', dataIndex: 'email', title: 'ایمیل'},
        {key: 'address', dataIndex: 'address', title: 'آدرس', render:(field, record)=>$(field.city)-$(field.street)}
    ]

    componentDidMount(){
      request ('/users').then(({data:persons}) => this.setState({persons: data}))
    }

    render(){
    
        return (<div><Table dataSource={this.state.persons} columns={this.columns} /></div>)
    }
}
