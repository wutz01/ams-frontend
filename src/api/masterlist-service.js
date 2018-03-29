import Vue from 'vue'

/* eslint-disable prefer-promise-reject-errors */
export default {
  loadMasterList: (status) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/member/all?memberType=${status}`).then((res) => {
        resolve(res.data.members)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  getMemberById: (memberId) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/member/${memberId}`).then((res) => {
        resolve(res.data.member)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  createMember: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/member/add`, payload).then((res) => {
        resolve(res.data.member)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  updateMember: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/member/update`, payload).then((res) => {
        resolve(res.data.member)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  updateProductStatus: (productId, status) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/product/update/${productId}/status/${status}`).then((res) => {
        resolve(res.data.categories)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  deleteProductImage: (productId, imageId) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/product/delete/image/${productId}?imageId=${imageId}`).then((res) => {
        resolve(res.data.categories)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
