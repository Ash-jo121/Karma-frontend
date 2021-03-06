import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendance = user => {
  return axios
    .post('users/attendance', {
        class : user.class,
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendanceinput = user => {
  return axios
    .put('users/attendanceinput', {
        name : user.name,
        attendance_C1:user.attendance,
        id: user.id
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

