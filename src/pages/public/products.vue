<template lang="pug">
#app
  v-app(dark)
    v-toolbar.white
      img(src="/static/images/logo.png", height="64px", width="128px")
      v-spacer
      public-navigation

    v-content
      h3 login content
</template>

<script>
export default {
  name: 'products',
  data () {
    return {}
  },

  components: {
    publicNavigation: () => import('@/components/public-navigation')
  }
}
</script>
