<template lang="pug">
  v-layout(row, wrap)
    v-flex(xs12)
      v-card
        v-card-title.title Product View :: {{ product.name }}
        v-card-text
          v-form(ref="createProductForm")
            v-layout(row)
              v-flex(xs12, md6)
                v-layout(wrap)
                  v-flex(xs12)
                    v-select(
                      light,
                      required,
                      return-object
                      prepend-icon="mdi-truck-delivery",
                      label="Supplier",
                      v-model="supplier.selected",
                      item-text="name",
                      item-value="id",
                      :items="supplier.list",
                      :rules="[inputRules()['required']]"
                    )
                  v-flex(xs12)
                    v-select(
                      multiple,
                      chips,
                      required,
                      prepend-icon="mdi-shape",
                      persistent-hint
                      label="Product Category",
                      v-model="category.selected",
                      item-value="id",
                      item-text="name"
                      :rules="[inputRules()['multipleRequired']]",
                      :items="category.list",
                    )
                  v-flex(xs12)
                    v-text-field(
                      light,
                      prepend-icon="mdi-water-pump",
                      v-model="input.name",
                      label="Product Name",
                      :rules="[inputRules()['required']]",
                      @keyup.enter.native="updateProduct",
                      required
                    )
                  v-flex(xs12)
                    v-text-field(
                      light,
                      prepend-icon="mdi-tag-text-outline",
                      v-model="input.brand",
                      label="Brand",
                      :rules="[inputRules()['required']]",
                      @keyup.enter.native="updateProduct",
                      required
                    )
                  v-flex(xs12)
                    v-text-field(
                      light,
                      prepend-icon="mdi-tag-outline",
                      v-model="input.specification",
                      label="Specification",
                      :rules="[inputRules()['required']]",
                      @keyup.enter.native="updateProduct",
                      required
                    )
                  v-flex(xs12)
                    v-text-field(
                      light,
                      prepend-icon="mdi-note-outline",
                      v-model="input.description",
                      label="Description",
                      @keyup.enter.native="updateProduct"
                    )
                  v-flex(xs12)
                    v-text-field(
                      light,
                      required,
                      prepend-icon="mdi-currency-usd",
                      v-model="input.price",
                      label="Price",
                      @keyup.enter.native="updateProduct",
                      :rules="[inputRules()['money']]",
                      :suffix="(supplier && supplier.selected && supplier.selected.currency ? supplier.selected.currency : '')"
                    )
                  v-flex(xs12).mt-2
                    v-switch(label="Featured Product?", v-model="input.isFeatured")
              v-flex(xs12, md6)
                v-layout(row, wrap)
                  v-flex(xs12).mt-3
                    div.ml-3.subheading Upload your product image here. Maximum of 2MB image filesize.
                    vue-dropzone#dropzone.ml-3(
                      ref="imageDropzone",
                      :options="dropzoneOptions",
                      v-on:vdropzone-complete="onProductImageSuccess",
                      v-on:vdropzone-sending="uploadProductImage",
                      v-on:vdropzone-file-added="countFile",
                      v-on:vdropzone-error="errorFile"
                    )
                  v-flex(xs12).ml-3.mt-2
                    div.subheading Uploaded Images
                    v-container(fluid, grid-list-xs).mt-2.pointer
                      v-layout(row, wrap, v-if="product && product.images && product.images.length > 0")
                        v-flex(xs3, v-for="(image,idx) in product.images", :key="idx")
                          v-card(flat, tile)
                            v-card-media(
                              @click.stop="viewImageDialog(image)",
                              height="150px",
                              :src="constructImageUrl(image)"
                            )

        v-card-actions.display-flex.justify-end
          v-btn(color="red", flat, @click.stop="$router.push({name: 'products'})", :disabled="loading.create") Back to Product Listing
          v-btn(
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="updateProduct"
          ) Update Product

      v-dialog(v-model="viewImage.show", max-width="500px", persistent)
        v-card
          v-card-media(:src="constructImageUrl(viewImage.selected)", height="400px")
          v-card-actions.display-flex.justify-end
            v-btn(flat, color="black", @click.stop="hideImageDialog", :disabled="loading.deleteImage") Close
            v-btn(flat, color="red", @click.stop="deleteProductImage", :loading="loading.deleteImage") Delete
</template>

<script>
/* eslint-disable no-unused-vars */
import moment from 'moment'
import { mapGetters } from 'vuex'
import { ProductService } from '@/api'
import { filter, map } from 'lodash/collection'
import { merge } from 'lodash/object'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

export default {
  name: 'product-view',
  data () {
    return {
      product: {},
      totalFilesAdded: 0,
      dropzoneOptions: {
        acceptedFiles: 'image/jpg, image/jpeg',
        autoProcessQueue: false,
        url: process.env.API_SERVER_URL + '/api/product/upload/image',
        thumbnailWidth: 150,
        maxFilesize: 2,
        uploadMultiple: false
      },
      input: {
        name: null,
        brand: null,
        specification: null,
        description: null,
        isFeatured: false,
        price: null
      },
      productImages: [],
      supplier: {
        list: [],
        selected: null
      },
      category: {
        list: [],
        selected: []
      },
      loading: {
        create: false,
        deleteImage: false
      },
      viewImage: {
        show: false,
        selected: {}
      }
    }
  },

  methods: {
    viewImageDialog (image) {
      this.viewImage.selected = image
      this.viewImage.show = true
    },

    hideImageDialog () {
      this.viewImage.show = false
      this.viewImage.selected = {}
    },

    async deleteProductImage () {
      this.loading.deleteImage = true

      try {
        let selected = this.viewImage.selected
        await ProductService.deleteProductImage(selected.productId, selected.id)

        this.displayToast('Image has been removed.', 'success')
        this.viewImage.selected = {}
        this.viewImage.show = false
        this.loading.deleteImage = false
      } catch (e) {
        this.viewImage.show = false
        this.loading.deleteImage = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to delete image. Please try again.', 'error')
      }
    },

    async getProductById () {
      try {
        this.product = await ProductService.getProductById(this.$route.params.productId)
        this.input = {
          name: this.product.name,
          brand: this.product.brand,
          specification: this.product.specification,
          description: this.product.description,
          isFeatured: this.product.isFeatured,
          price: this.product.price
        }

        this.supplier.selected = this.product.supplier
        this.category.selected = map(this.product.categories, 'id')
      } catch (e) {
        this.displayToast(this.parseErrorRes(e) || `An error occured when trying to get product. Please try again.`, 'error')
        this.$router.push({name: 'products'})
      }
    },

    countFile () {
      this.totalFilesAdded++
    },

    errorFile (file, message, xhr) {
      if (this.totalFilesAdded > 0) this.totalFilesAdded--
    },

    async uploadProductImage (file, xhr, formData) {
      if (this.product && this.product.id) {
        formData.append('productId', this.product.id)
        formData.append('productImage', file)
      }
    },

    async updateProduct () {
      if (!this.$refs.createProductForm.validate()) return
      try {
        this.loading.create = true
        let payload = merge(this.input, {
          categories: this.category.selected,
          supplierId: this.supplier.selected.id,
          prodId: this.product.id
        })

        this.product = await ProductService.updateProduct(payload)
        if (this.totalFilesAdded > 0) {
          this.$refs.imageDropzone.processQueue()
          this.displayToast('Product image uploading. Please wait for awhile..', 'success')
        } else {
          this.totalFilesAdded = 0
          this.loading.create = false
          this.getProductById()
          this.displayToast('Product has been updated.', 'success')
        }
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occur when trying to create order. Please try again', 'error')
      }
    },

    onProductImageSuccess (file, response) {
      this.totalFilesAdded--
      if (this.totalFilesAdded <= 0) {
        this.displayToast('Product has been updated.', 'success')
        this.loading.create = false
        this.totalFilesAdded = 0

        this.$refs.imageDropzone.removeAllFiles()
        this.getProductById()
      }
    },

    async loadSupplierList () {
      try {
        this.supplier.list = await ProductService.loadSupplierList('active')
      } catch (e) {
        this.displayToast('An error occured when trying to load your supplier List. Please try again', 'error')
      }
    },

    async loadCategoryList () {
      try {
        this.category.list = await ProductService.loadCategoryList('active')
      } catch (e) {
        this.displayToast('An error occured when trying to load your category List. Please try again', 'error')
      }
    }
  },

  computed: {
    ...mapGetters([
      'getToken'
    ])
  },

  components: {
    vueDropzone: vue2Dropzone
  },

  mounted () {
    this.$refs.imageDropzone.setOption('headers', {'Authorization': `Bearer ${this.getToken}`})
  },

  created () {
    this.getProductById()
    this.loadSupplierList()
    this.loadCategoryList()
  }
}
</script>
