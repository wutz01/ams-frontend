<template lang="pug">
v-layout(row, wrap)
  v-flex(xs12)
    v-text-field(append-icon="search", label="Search", single-line, hide-details, v-model="search").mb-2

    v-data-table.elevation-1(:headers="headers", :items="attendanceList", :search="search", :rows-per-page-items="rowPerPageItems")
      template(slot="headerCell", slot-scope="props")
        v-tooltip(bottom)
          span(slot="activator")
            | {{ props.header.text }}
          span
            | {{ props.header.text }}
      template(slot="items", slot-scope="props")
        tr(@click.stop="selectAttendance(props.item)").pointer
          td {{ props.item.batch }}
          td {{ props.item.time }}
          td {{ props.item.date }}
          td.text-xs-left
            v-btn(icon, light, small, color="red", @click.native.stop="deleteMember(props.item)").white--text.pointer
              v-icon mdi-delete

  v-dialog(v-model="attendanceDialog.show", max-width="500px", persistent)
    v-form(ref="attendanceForm")
      v-card
        v-card-title.title {{ (attendanceDialog.selected ? 'Update Attendance' : 'Add Attendance') }}
        v-card-text

        v-card-actions.display-flex.justify-end
          v-btn(color="red", flat, @click.stop="cancelModal", :disabled="loading.create") Close
          v-btn(
            v-if="!attendanceDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="createMember"
          ) Add Attendance

          v-btn(
            v-if="attendanceDialog.selected"
            medium,
            color="primary",
            :loading="loading.create",
            @click.stop="updateMember(attendanceDialog.selected)"
          ) Update Attendance

  v-btn(fab, bottom, left, color="green", dark, fixed, @click.stop="attendanceDialog.show = true")
    v-icon add
</template>

<script>
import moment from 'moment'
import { AttendanceService } from '@/api'

export default {
  name: 'attendance-list',
  data () {
    return {
      rowPerPageItems: [15, 25, 50, {'text': 'All', 'value': -1}],
      headers: [
        {text: 'Batch', align: 'left', sortable: true, value: 'batch'},
        {text: 'Time', align: 'left', sortable: false, value: 'time'},
        {text: 'Date', align: 'left', value: 'date'},
        {text: 'Actions', align: 'left', value: 'id'}
      ],
      search: null,
      input: {
        batch: null,
        time: null,
        date: null,
        workerAssign: null,
        officerAssign: null
      },
      attendanceList: [],
      attendanceDialog: {
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
      if (!this.$refs.attendanceForm.validate()) return

      try {
        this.loading.create = true
        // await MasterlistService.updateMember({
        //   userId: memberId,
        //   firstname: this.input.firstname,
        //   lastname: this.input.lastname,
        //   middlename: this.input.middlename,
        //   address: this.input.address,
        //   contactNumber: this.input.contactNumber,
        //   churchId: this.input.churchId,
        //   email: this.input.email,
        //   status: this.input.status,
        //   memberType: `MEMBER`,
        //   isOfficer: this.input.isOfficer
        // })

        this.displayToast(`Member has been updated`)
        this.loadAttendanceList()
        this.cancelModal()
        this.$refs.attendanceForm.reset()
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to update member. Please try again', 'error')
      }
    },

    cancelModal () {
      this.attendanceDialog.show = false
      this.input = {
        batch: null,
        time: null,
        date: null,
        workerAssign: null,
        officerAssign: null
      }

      this.attendanceDialog.selected = null
    },

    dateFormat (datetime) {
      return (datetime ? moment(datetime).format(this.timeformat()) : '')
    },

    async deleteMember (member) {
      try {
        // let fullName = `${member.lastname}, ${member.firstname} ${member.middlename}`
        // await MasterlistService.updateMember({
        //   supplierId: supplier.id,
        //   name: supplier.name,
        //   address: supplier.address,
        //   currency: supplier.currency,
        //   status: 'inactive'
        // })

        // this.displayToast(`Successfully deleted Member - ${fullName}`)
        this.displayToast(`This function is not yet available`, 'error')
        this.loadAttendanceList()
      } catch (e) {
        console.log(`e`, e)
        this.displayToast(this.parseErrorRes(e) || 'An error occured when trying to delete member. Please try again', 'error')
      }
    },

    selectAttendance (attendance) {
      this.$router.push({name: 'attendance-view', params: {id: attendance.id}})
    },

    async createAttendance () {
      this.loading.create = false
      if (!this.$refs.attendanceForm.validate()) return

      try {
        this.loading.create = true
        this.input.memberType = `MEMBER`
        // await MasterlistService.createMember(this.input)

        this.loadAttendanceList()
        this.displayToast('Successfully added new attendance', 'success')
        this.attendanceDialog.show = false
        this.loading.create = false
      } catch (e) {
        this.loading.create = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured. Please try again', 'error')
      }
    },

    async loadAttendanceList () {
      try {
        this.attendanceList = await AttendanceService.loadAttendanceList()
      } catch (e) {
        this.displayToast('An error occured when trying to load your attendance List. Please try again', 'error')
      }
    }
  },

  components: {},

  mounted () {
    this.loadAttendanceList()
  }
}
</script>
