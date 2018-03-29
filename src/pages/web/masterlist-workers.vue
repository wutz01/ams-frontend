<template lang="pug">
v-layout(row, wrap)
  v-flex(xs12)
    v-text-field(append-icon="search", label="Search", single-line, hide-details, v-model="search").mb-2

    v-data-table.elevation-1(:headers="headers", :items="memberList", :search="search", :rows-per-page-items="rowPerPageItems")
      template(slot="headerCell", slot-scope="props")
        v-tooltip(bottom)
          span(slot="activator")
            | {{ props.header.text }}
          span
            | {{ props.header.text }}
      template(slot="items", slot-scope="props")
        tr(@click.stop="selectMember(props.item)").pointer
          td {{ props.item.churchId }}
          td {{ props.item.lastname }}, {{ props.item.firstname }} {{ props.item.middlename }}
          td {{ props.item.address }}
          td {{ props.item.contactNumber }}
          td.text-xs-left {{ props.item.status }}
          td.text-xs-left
            v-btn(icon, light, small, color="red", @click.native.stop="deleteMember(props.item)").white--text.pointer
              v-icon mdi-delete

  v-dialog(v-model="memberDialog.show", max-width="500px", persistent)
    v-form(ref="createMemberForm")
      v-card
        v-card-title.title {{ (memberDialog.selected ? 'Update Worker' : 'Add Worker') }}
        v-card-text
          v-layout(row, wrap)
            v-flex(xs12)
              v-text-field(
                light,
                single-line,
                prepend-icon="mdi-account-box",
                v-model="input.churchId",
                label="Church ID",
                :rules="[inputRules()['required']]"
                required
              )
            v-flex(xs12)
              v-text-field(
                light,
                single-line,
                prepend-icon="mdi-shape",
                v-model="input.lastname",
                label="Last Name",
                :rules="[inputRules()['required']]"
                required
              )
            v-flex(xs12)
              v-text-field(
                light,
                single-line,
                prepend-icon="mdi-shape",
                v-model="input.firstname",
                label="First Name",
                :rules="[inputRules()['required']]"
                required
              )
            v-flex(xs12)
              v-text-field(
                light,
                single-line,
                prepend-icon="mdi-shape",
                v-model="input.middlename",
                label="Middle Name"
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
                prepend-icon="mdi-phone",
                v-model="input.contactNumber",
                label="Contact Number",
                :rules="[inputRules()['required']]"
              )
            v-flex(xs12)
              v-text-field(
                light,
                required,
                single-line,
                prepend-icon="mdi-email",
                v-model="input.email",
                label="Email Address",
                :rules="[inputRules()['required']]"
              )
            v-flex(xs12)
              v-select(
                :items="['ACTIVE', 'INACTIVE', 'RFA', 'UNKNOWN', 'OUT OF COUNTRY', 'CANNOT BE LOC']",
                label="Status",
                :rules="[inputRules()['required']]",
                v-model="input.status",
                required,
                prepend-icon="mdi-battery"
              )
        v-card-actions.display-flex.justify-end
          v-btn(color="red", flat, @click.stop="cancelModal", :disabled="loading.create") Close
          v-btn(
            v-if="!memberDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="createMember"
          ) Add Worker

          v-btn(
            v-if="memberDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="updateMember(memberDialog.selected)"
          ) Update Worker

  v-btn(fab, bottom, left, color="green", dark, fixed, @click.stop="memberDialog.show = true")
    v-icon add
</template>

<script>
import moment from 'moment'
import { MasterlistService } from '@/api'

export default {
  name: 'masterlist-brethren',
  data () {
    return {
      rowPerPageItems: [15, 25, 50, {'text': 'All', 'value': -1}],
      headers: [
        {text: 'ID', align: 'left', sortable: true, value: 'churchId'},
        {text: 'Name', align: 'left', sortable: false, value: 'name'},
        {text: 'Address', align: 'left', value: 'address'},
        {text: 'Contact Number', align: 'left', value: 'contactNumber'},
        {text: 'Status', align: 'left', value: 'status'},
        {text: 'Actions', align: 'left', value: 'id'}
      ],
      search: null,
      input: {
        churchId: null,
        firstname: null,
        lastname: null,
        middlename: null,
        address: null,
        contactNumber: null,
        email: null,
        status: null,
        isOfficer: false
      },
      memberList: [],
      memberDialog: {
        show: false,
        selected: null
      },
      loading: {
        create: false
      }
    }
  },

  methods: {
    async updateMember (memberId) {
      this.loading.create = false
      if (!this.$refs.createMemberForm.validate()) return

      try {
        this.loading.create = true
        await MasterlistService.updateMember({
          userId: memberId,
          firstname: this.input.firstname,
          lastname: this.input.lastname,
          middlename: this.input.middlename,
          address: this.input.address,
          contactNumber: this.input.contactNumber,
          churchId: this.input.churchId,
          email: this.input.email,
          status: this.input.status,
          memberType: `WORKER`,
          isOfficer: this.input.isOfficer
        })

        this.displayToast(`Worker has been updated`)
        this.loadMemberList()
        this.cancelModal()
        this.$refs.createMemberForm.reset()
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to update worker. Please try again', 'error')
      }
    },

    cancelModal () {
      this.memberDialog.show = false
      this.input = {
        churchId: null,
        firstname: null,
        lastname: null,
        middlename: null,
        address: null,
        contactNumber: null,
        email: null,
        status: null,
        isOfficer: false
      }

      this.memberDialog.selected = null
    },

    dateFormat (datetime) {
      return (datetime ? moment(datetime).format(this.timeformat()) : '')
    },

    async deleteMember (member) {
      try {
        let fullName = `${member.lastname}, ${member.firstname} ${member.middlename}`
        // await MasterlistService.updateMember({
        //   supplierId: supplier.id,
        //   name: supplier.name,
        //   address: supplier.address,
        //   currency: supplier.currency,
        //   status: 'inactive'
        // })

        this.displayToast(`Successfully deleted worker - ${fullName}`)
        this.loadMemberList()
      } catch (e) {
        console.log(`e`, e)
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to delete worker. Please try again', 'error')
      }
    },

    selectMember (member) {
      this.input = {
        firstname: member.firstname,
        lastname: member.lastname,
        middlename: member.middlename,
        address: member.address,
        contactNumber: member.contactNumber,
        churchId: member.churchId,
        email: member.email,
        status: member.status,
        isOfficer: member.isOfficer
      }

      this.memberDialog.selected = member.id
      this.memberDialog.show = true
    },

    async createMember () {
      this.loading.create = false
      if (!this.$refs.createMemberForm.validate()) return

      try {
        this.loading.create = true
        this.input.memberType = `WORKER`
        await MasterlistService.createMember(this.input)

        this.loadMemberList()
        this.displayToast('Successfully added new worker', 'success')
        this.memberDialog.show = false
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured. Please try again', 'error')
      }
    },

    async loadMemberList () {
      try {
        this.memberList = await MasterlistService.loadMasterList('WORKER')
      } catch (e) {
        this.displayToast('An error occured when trying to load your workers List. Please try again', 'error')
      }
    }
  },

  components: {},

  mounted () {
    this.loadMemberList()
  }
}
</script>
