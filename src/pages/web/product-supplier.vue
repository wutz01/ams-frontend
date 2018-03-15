<template lang="pug">
v-layout(row, wrap)
  v-flex(xs12)
    v-text-field(append-icon="search", label="Search", single-line, hide-details, v-model="search").mb-2

    v-data-table.elevation-1(:headers="headers", :items="supplierList", :search="search", :rows-per-page-items="rowPerPageItems")
      template(slot="headerCell", slot-scope="props")
        v-tooltip(bottom)
          span(slot="activator")
            | {{ props.header.text }}
          span
            | {{ props.header.text }}
      template(slot="items", slot-scope="props")
        tr(@click.stop="selectSupplier(props.item)").pointer
          td {{ props.item.id }}
          td {{ props.item.name }}
          td {{ props.item.address }}
          td {{ props.item.currency }}
          td.text-xs-left {{ props.item.status }}
          td.text-xs-left {{ dateFormat(props.item.created_at) }}
          td.text-xs-left
            v-btn( light, small, color="red", @click.native.stop="deleteSupplier(props.item)").white--text Delete

  v-dialog(v-model="supplierDialog.show", max-width="500px", persistent)
    v-form(ref="createSupplierForm")
      v-card
        v-card-title.title {{ (supplierDialog.selected ? 'Update Supplier' : 'Add Supplier') }}
        v-card-text
          v-layout(row, wrap)
            v-flex(xs12)
              v-text-field(
                light,
                single-line,
                prepend-icon="mdi-shape",
                v-model="input.name",
                label="Supplier Name",
                :rules="[inputRules()['required']]"
                required
              )
            v-flex(xs12)
              v-text-field(
                light,
                required,
                single-line,
                prepend-icon="mdi-map-marker",
                v-model="input.address",
                label="Address",
                :rules="[inputRules()['required']]"
              )
            v-flex(xs12)
              v-text-field(
                light,
                required,
                single-line,
                prepend-icon="mdi-currency-usd",
                v-model="input.currency",
                label="Currency",
                :rules="[inputRules()['required']]"
              )
        v-card-actions.display-flex.justify-end
          v-btn(color="red", flat, @click.stop="cancelModal", :disabled="loading.create") Close
          v-btn(
            v-if="!supplierDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="createSupplier"
          ) Add Supplier

          v-btn(
            v-if="supplierDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="updateSupplier(supplierDialog.selected)"
          ) Update Supplier

  v-btn(fab, bottom, right, color="green", dark, fixed, @click.stop="supplierDialog.show = true")
    v-icon add
</template>

<script>
import moment from 'moment'
import { ProductService } from '@/api'

export default {
  name: 'product-supplier',
  data () {
    return {
      rowPerPageItems: [15, 25, 50, {'text': 'All', 'value': -1}],
      headers: [
        {text: 'ID', align: 'left', sortable: true, value: 'id'},
        {text: 'Supplier Name', align: 'left', sortable: true, value: 'name'},
        {text: 'Address', align: 'left', value: 'address'},
        {text: 'Currency', align: 'left', value: 'currency'},
        {text: 'Status', align: 'left', value: 'status'},
        {text: 'Created', align: 'left', value: 'created_at'},
        {text: 'Actions', align: 'left', value: 'id'}
      ],
      search: null,
      input: {
        name: null,
        address: null,
        currency: null
      },
      supplierList: [],
      supplierDialog: {
        show: false,
        selected: null
      },
      loading: {
        create: false
      }
    }
  },

  methods: {
    async updateSupplier (supplierId) {
      this.loading.create = false
      if (!this.$refs.createSupplierForm.validate()) return

      try {
        this.loading.create = true
        await ProductService.updateSupplier({
          supplierId: supplierId,
          name: this.input.name,
          address: this.input.address,
          currency: this.input.currency
        })

        this.displayToast(`Supplier has been updated`)
        this.loadSupplierList()
        this.cancelModal()
        this.$refs.createSupplierForm.reset()
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to update supplier. Please try again', 'error')
      }
    },

    cancelModal () {
      this.supplierDialog.show = false
      this.input = {
        name: null,
        address: null,
        currency: null
      }

      this.supplierDialog.selected = null
    },

    dateFormat (datetime) {
      return (datetime ? moment(datetime).format(this.timeformat()) : '')
    },

    async deleteSupplier (supplier) {
      try {
        await ProductService.updateSupplier({
          supplierId: supplier.id,
          name: supplier.name,
          address: supplier.address,
          currency: supplier.currency,
          status: 'inactive'
        })

        this.displayToast(`Successfully deleted Supplier - ${supplier.name}`)
        this.loadSupplierList()
      } catch (e) {
        console.log(`e`, e)
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to delete supplier. Please try again', 'error')
      }
    },

    selectSupplier (supplier) {
      this.input = {
        name: supplier.name,
        address: supplier.address,
        currency: supplier.currency
      }

      this.supplierDialog.selected = supplier.id
      this.supplierDialog.show = true
    },

    async createSupplier () {
      this.loading.create = false
      if (!this.$refs.createSupplierForm.validate()) return

      try {
        this.loading.create = true
        await ProductService.createSupplier(this.input)

        this.loadSupplierList()
        this.displayToast('Successfully added new supplier', 'success')
        this.supplierDialog.show = false
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured. Please try again', 'error')
      }
    },

    async loadSupplierList () {
      try {
        this.supplierList = await ProductService.loadSupplierList('active')
      } catch (e) {
        this.displayToast('An error occured when trying to load your supplier List. Please try again', 'error')
      }
    }
  },

  components: {},

  mounted () {
    this.loadSupplierList()
  }
}
</script>
