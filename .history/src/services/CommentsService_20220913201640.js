import React, { Component } from 'react'
import { baseService } from './baseService';

export default class CommentsService extends baseService {
    constructor(){
        super();
    }

    getAllComments = (taskId) => {
        return this.get(`Comment/getAll?taskId=${taskId}`);
    }

    insertComment = (taskId) => {
        return this.get(`Comment/getAll?taskId=${taskId}`);
    }

}
