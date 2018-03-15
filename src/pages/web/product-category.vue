<template lang="pug">
v-layout(row, wrap)
  v-flex(xs12)
    v-text-field(append-icon="search", label="Search", single-line, hide-details, v-model="search").mb-2

    v-data-table.elevation-1(:headers="headers", :items="categoryList", :search="search", :rows-per-page-items="rowPerPageItems")
      template(slot="headerCell", slot-scope="props")
        v-tooltip(bottom)
          span(slot="activator")
            | {{ props.header.text }}
          span
            | {{ props.header.text }}
      template(slot="items", slot-scope="props")
        tr(@click.stop="selectCategory(props.item)").pointer
          td {{ props.item.id }}
          td {{ props.item.name }}
          td.text-xs-left {{ props.item.description }}
          td.text-xs-left {{ props.item.status }}
          td.text-xs-left {{ dateFormat(props.item.created_at) }}
          td.text-xs-left
            v-btn( light, small, color="red", @click.native.stop="deleteCategory(props.item)").white--text Delete

  v-dialog(v-model="categoryDialog.show", max-width="500px", persistent)
    v-form(ref="createCategoryForm")
      v-card
        v-card-title.title {{ (categoryDialog.selected ? 'Update Category' : 'Add Category') }}
        v-card-text
          v-layout(row, wrap)
            v-flex(xs12)
              v-text-field(
                light,
                single-line,
                prepend-icon="mdi-shape",
                v-model="input.categoryName",
                label="Category Name",
                :rules="[inputRules()['required']]",
                required
              )
            v-flex(xs12)
            v-text-field(
              light,
              textarea,
              required,
              v-model="input.categoryDescription",
              label="Description"
            )
        v-card-actions.display-flex.justify-end
          v-btn(color="red", flat, @click.stop="categoryDialog.show = false", :disabled="loading.create") Close
          v-btn(
            v-if="!categoryDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="createCategory"
          ) Add Category

          v-btn(
            v-if="categoryDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="updateCategory(categoryDialog.selected)"
          ) Update Category

  v-btn(fab, bottom, right, color="green", dark, fixed, @click.stop="categoryDialog.show = true")
    v-icon add
</template>

<script>
import moment from 'moment'
import { ProductService } from '@/api'

export default {
  name: 'product-category',
  data () {
    return {
      rowPerPageItems: [15, 25, 50, {'text': 'All', 'value': -1}],
      headers: [
        {text: 'ID', align: 'left', sortable: true, value: 'id'},
        {text: 'Category Name', align: 'left', sortable: true, value: 'name'},
        {text: 'Description', align: 'left', value: 'description'},
        {text: 'Status', align: 'left', value: 'status'},
        {text: 'Created', align: 'left', value: 'created_at'},
        {text: 'Actions', align: 'left', value: 'id'}
      ],
      search: null,
      input: {
        categoryName: null,
        categoryDescription: null
      },
      categoryList: [],
      categoryDialog: {
        show: false,
        selected: null
      },
      loading: {
        create: false
      }
    }
  },

  methods: {
    async updateCategory (categoryId) {
      this.loading.create = false
      if (!this.$refs.createCategoryForm.validate()) return

      try {
        this.loading.create = true
        await ProductService.updateCategory({
          catId: categoryId,
          name: this.input.categoryName,
          description: this.input.categoryDescription
        })

        this.displayToast(`Category has been updated`)
        this.loadCategoryList()
        this.cancelModal()
        this.$refs.createCategoryForm.reset()
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to update category. Please try again', 'error')
      }
    },

    cancelModal () {
      this.categoryDialog.show = false
      this.input = {
        categoryName: null,
        categoryDescription: null
      }

      this.categoryDialog.selected = null
    },

    dateFormat (datetime) {
      return (datetime ? moment(datetime).format(this.timeformat()) : '')
    },

    async deleteCategory (category) {
      try {
        await ProductService.updateCategory({
          catId: category.id,
          name: category.name,
          description: category.description,
          status: 'inactive'
        })

        this.displayToast(`Successfully deleted Category - ${category.name}`)
        this.loadCategoryList()
      } catch (e) {
        console.log(`e`, e)
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to delete category. Please try again', 'error')
      }
    },

    selectCategory (category) {
      this.input = {
        categoryName: category.name,
        categoryDescription: category.description
      }

      this.categoryDialog.selected = category.id
      this.categoryDialog.show = true
    },

    async createCategory () {
      this.loading.create = false
      if (!this.$refs.createCategoryForm.validate()) return

      try {
        this.loading.create = true
        let payload = {
          name: this.input.categoryName,
          description: this.input.categoryDescription
        }

        await ProductService.createCategory(payload)

        this.loadCategoryList()
        this.displayToast('Successfully added new category', 'success')
        this.categoryDialog.show = false
        this.loading.create = false

        this.$refs.createCategoryForm.reset()
      } catch (e) {
        console.log(`ee`, e)
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured. Please try again', 'error')
      }
    },

    async loadCategoryList () {
      try {
        this.categoryList = await ProductService.loadCategoryList('active')
      } catch (e) {
        this.displayToast('An error occured when trying to load your category List. Please try again', 'error')
      }
    }
  },

  components: {},

  mounted () {
    this.loadCategoryList()
  }
}
</script>
