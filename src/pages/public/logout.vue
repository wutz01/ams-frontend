<template lang="pug">
#app
  v-app(dark)
    v-toolbar.white
      img(src="/static/images/logo.png", height="64px", width="128px")
      v-spacer
      public-navigation

    v-content
      v-container(fill-height, fluid)
        v-layout(align-center, justify-center)
          v-flex(xs12).display-flex.justify-center
            h3.white--text.title Logging out...
</template>

<script>
import { UserService } from '@/api'

export default {
  name: 'logout',
  data () {
    return {}
  },

  methods: {},
  mounted () {
    UserService.logout()
    setTimeout(() => {
      this.$router.push({name: 'landing'})
    }, 2500)
  }
}
</script>
