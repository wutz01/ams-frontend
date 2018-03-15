<template lang="pug">
  v-app
    v-snackbar(
      :color="snackBar.color",
      :timeout="snackBar.timeout",
      bottom,
      multi-line,
      v-model="snackBar.show"
    )
      span.white--text {{ snackBar.message }}
      v-btn(flat, color="white", @click.native="snackBar.show = false") Close

    router-view
</template>

<script>
import { EventBus } from '@/utils/event-bus'

export default {
  name: 'app',

  data () {
    return {
      snackBar: {
        show: false,
        message: null,
        color: null,
        timeout: 7000
      }
    }
  },

  methods: {
    showToast (options) {
      let color = 'primary'

      if (options.mode === 'success') color = 'black'
      if (options.mode === 'error') color = 'red'

      this.snackBar.show = true
      this.snackBar.message = options.text
      this.snackBar.color = color
    }
  },

  mounted () {
    EventBus.$on('display-toast', this.showToast)
  }
}
</script>
