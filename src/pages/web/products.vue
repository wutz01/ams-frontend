<template lang="pug">
  v-layout(row, wrap)
    v-flex(xs12)
      v-text-field(append-icon="search", label="Search", single-line, hide-details, v-model="search").mb-2

      v-data-table.elevation-1(:headers="headers", :items="productList", :search="search", :rows-per-page-items="rowPerPageItems")
        template(slot="headerCell", slot-scope="props")
          v-tooltip(bottom)
            span(slot="activator")
              | {{ props.header.text }}
            span
              | {{ props.header.text }}
        template(slot="items", slot-scope="props")
          tr(@click="$router.push({name: 'product-view', params: {productId: props.item.id}})").pointer
            td {{ props.item.id }}
            td {{ props.item.name }}
            td {{ props.item.brand }}
            td {{ props.item.specification }}
            td.text-xs-left {{ props.item.supplier.name }}
            td.text-xs-left {{ props.item.status }}
            td.text-xs-left
              v-btn( light, small, color="red", @click.native.stop="deleteProduct(props.item)").white--text Delete

    v-btn(fab, bottom, right, color="green", dark, fixed, @click.stop="$router.push({name: 'product-create'})")
      v-icon add
</template>

<script>
import { ProductService } from '@/api'

export default {
  name: 'products',
  data () {
    return {
      rowPerPageItems: [15, 25, 50, {'text': 'All', 'value': -1}],
      headers: [
        {text: 'ID', align: 'left', sortable: true, value: 'id'},
        {text: 'Product Name', align: 'left', sortable: true, value: 'name'},
        {text: 'Brand', align: 'left', value: 'brand'},
        {text: 'Specification', align: 'left', value: 'specification'},
        {text: 'Supplier', align: 'left', value: 'supplier.name'},
        {text: 'Status', align: 'left', value: 'status'},
        {text: 'Actions', align: 'left', value: 'id'}
      ],
      search: null,
      input: {
        name: null,
        price: null,
        categories: [],
        supplierId: null
      },
      productList: [],
      products: {
        show: false,
        selected: null
      },
      loading: {
        create: false
      }
    }
  },

  methods: {
    async deleteProduct (product) {
      try {
        await ProductService.updateProductStatus(product.id, 'INACTIVE')
        this.displayToast('Product has been deleted', 'success')
        this.loadProductList()
      } catch (e) {
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to delete product. Please try again', 'error')
      }
    },

    async loadProductList () {
      try {
        this.productList = await ProductService.loadProductList('active')
      } catch (e) {
        this.displayToast('An error occured when trying to load your product List. Please try again', 'error')
      }
    }
  },

  components: {},

  mounted () {
    this.loadProductList()
  }
}
</script>
