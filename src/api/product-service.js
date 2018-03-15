import Vue from 'vue'

/* eslint-disable prefer-promise-reject-errors */
export default {
  createCategory: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/category/create`, payload).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  createSupplier: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/supplier/create`, payload).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  updateCategory: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/category/update`, payload).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  updateSupplier: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/supplier/update`, payload).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  loadCategoryList: (status) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/category/all?status=${status}`).then((res) => {
        resolve(res.data.categories)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  loadSupplierList: (status) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/supplier/all?status=${status}`).then((res) => {
        resolve(res.data.suppliers)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  getProductById: (productId) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/product/${productId}`).then((res) => {
        resolve(res.data.product)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  loadProductList: (status) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/product/all?status=${status}`).then((res) => {
        resolve(res.data.products)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  createProduct: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/product/create`, payload).then((res) => {
        resolve(res.data.product)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  updateProduct: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/product/update`, payload).then((res) => {
        resolve(res.data.product)
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
