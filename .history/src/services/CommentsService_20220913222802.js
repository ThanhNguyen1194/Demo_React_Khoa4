import React, { Component } from 'react'
import { baseService } from './baseService';

export default class CommentsService extends baseService {
    constructor() {
        super();
    }

    getAllComments = (taskId) => {
        return this.get(`Comment/getAll?taskId=${taskId}`);
    }

    insertComment = (newComment) => {
        return this.get(`Comment/insertComment`, newComment);
    }

}

export const commentsService = new CommentsService();