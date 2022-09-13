import React, { Component } from 'react'
import { baseService } from './baseService';

export default class CommentsService extends baseService {
    constructor(){
        super();
    }

    getAllPriority = () => {
        return this.get(`Priority/getAll`);
    }
}
