<template lang="pug">
v-layout(row, wrap)
  v-flex(xs12)
    v-flex(xs6)
      h3(v-if="attendance") {{ attendance.batch }}
      p(v-if="attendance") Attendees Count: {{ attendanceCount }}
      //- a(v-if="downloadLink", :href="downloadLink", target="_blank") Click here to download generated excel..
      div(v-if="downloadLink")
        p Copy the link below and paste it to another tab to download.
        p This is temporary.
        code {{ downloadLink }}
      v-btn(primary, outline, @click.stop="downloadExcel", v-if="!downloadLink") Generate Excel
    v-text-field(append-icon="search", label="Search", single-line, hide-details, v-model="search").mb-2

    v-data-table.elevation-1(:headers="headers", :items="attendees", :search="search", :rows-per-page-items="rowPerPageItems")
      template(slot="headerCell", slot-scope="props")
        v-tooltip(bottom)
          span(slot="activator")
            | {{ props.header.text }}
          span
            | {{ props.header.text }}
      template(slot="items", slot-scope="props")
        tr
          td {{ props.item.churchId }}
          td {{ props.item.lastname }}
          td {{ props.item.firstname }}
          td {{ props.item.middlename }}
</template>

<script>
import { AttendanceService } from '@/api'

export default {
  name: 'attendance-view',
  data () {
    return {
      attendance: null,
      attendanceCount: 0,
      attendees: [],
      downloadLink: null,
      rowPerPageItems: [{'text': 'All', 'value': -1}],
      headers: [
        {text: 'ID', align: 'left', sortable: true, value: 'churchId'},
        {text: 'Last Name', align: 'left', sortable: false, value: 'lastname'},
        {text: 'First Name', align: 'left', sortable: false, value: 'firstname'},
        {text: 'Middle Name', align: 'left', sortable: false, value: 'middlename'}
      ],
      search: null
    }
  },

  methods: {
    async loadAttendance () {
      if (!this.$route.params.id) {
        this.displayToast('An error occured when trying to load attendance. Please try again', 'error')
        this.$router.go(-1)
      }
      try {
        let data = await AttendanceService.getAttendance(this.$route.params.id)
        this.attendance = data.attendance
        this.attendanceCount = data.count
        this.attendees = data.attendees
      } catch (e) {
        this.displayToast('An error occured when trying to load your attendance List. Please try again', 'error')
      }
    },

    async downloadExcel () {
      let url = await AttendanceService.downloadAttendance(this.$route.params.id)
      this.displayToast('Downloading Excel...', 'success')
      this.downloadLink = `${url.url}`
    }
  },

  components: {},

  mounted () {
    this.loadAttendance()
  }
}
</script>
