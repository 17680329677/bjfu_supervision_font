import axios from "Plugins/axios";

export const getUserByName = (name) => {
  return axios.get('/api/users/'+name)
};

export const queryUsers = (params) => {
  return axios.get('/api/users', {params:params})
};

export const putUser = (params) => {
  return axios.put('/api/users/'+params.username, params)
};

export const postUser = (params) => {
  return axios.post('/api/users', params)
};


export const queryRoles = (params) => {
  return axios.get('/api/roles', {params:params})
};


export const queryGroups = (params) => {
  return axios.get('/api/groups', {params:params})
};

export const getEvents = (params) => {
  return axios.get('/api/users/'+ params.username + '/events')
};

// ** 登陆

export const loginUser = (params) => {
  return axios.post('/api/login', params)
};

// 登出
export const logoutUser = (params) => {
  return axios.get('/api/logout')
};

//当前用户
export const currentUser = (params) => {
  return axios.get('/api/current_user')
};
