import Vue from 'vue'

/* eslint-disable prefer-promise-reject-errors */
export default {
  loadAttendanceList: () => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/attendance/all`).then((res) => {
        resolve(res.data.attendance)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  getAttendance: (attendanceId) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/attendance/${attendanceId}`).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  downloadAttendance: (attendanceId) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/attendance/${attendanceId}/download-excel`).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  createAttendance: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/attendance/add`, payload).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // updateMember: (payload) => {
  //   return new Promise((resolve, reject) => {
  //     Vue.http.post(`api/member/update`, payload).then((res) => {
  //       resolve(res.data.member)
  //     }).catch((err) => {
  //       reject(err)
  //     })
  //   })
  // }
}
