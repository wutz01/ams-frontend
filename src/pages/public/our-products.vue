<template lang="pug">
#app
  v-app(dark)
    v-toolbar.white
      img(src="/static/images/logo.png", height="64px", width="128px")
      v-spacer
      public-navigation

    v-content
      v-container(fluid)
        v-layout(align-center, justify-center)
          v-flex(xs12).display-flex.justify-center
            v-card(light, width="80%")
              v-card-title(primary-title).title Our Products
              v-card-text
</template>

<script>
export default {
  name: 'our-product',
  data () {
    return {}
  },

  methods: {},

  components: {
    publicNavigation: () => import('@/components/public-navigation')
  }
}
</script>
