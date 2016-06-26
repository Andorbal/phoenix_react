"use strict";

import request from 'superagent';

export default {
  getAll: () => {
    return request.get('/api/repos')
      .set('Accept', 'application/json')
      .then(response => response.body);
  },
  add: (author, name) => {
    return request.post('/api/repos/create')
      .type('form')
      .accept('json')
      .send({author: author, name: name})
      .then(response => {
        return response.body.repo_id;
      });
  }
}
