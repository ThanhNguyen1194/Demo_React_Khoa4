import React, { Component } from 'react'
import { baseService } from './baseService';

export default class CommentsService extends baseService {
    constructor(){
        super();
    }

    getAllPriority = (taskId) => {
        return this.get(`Comment/getAll?taskId=${taskId}`);
    }
}
