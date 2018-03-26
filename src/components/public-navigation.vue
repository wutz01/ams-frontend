<template lang="pug">
v-toolbar-items.hidden-sm-and-down
  v-btn(flat, :color="($route.name === 'landing' ? 'primary' : '')", @click.stop="$router.push({name: 'landing'})").black--text Home
  //- v-btn(flat, :color="($route.name === 'our-products' ? 'primary' : '')", @click.stop="$router.push({name: 'our-products'})").black--text Products
  v-btn(flat, :color="($route.name === 'login' ? 'primary' : '')", @click.stop="$router.push({name: 'login'})").black--text Login
  //- v-btn(flat, :color="($route.name === 'registration' ? 'primary' : '')", @click.stop="$router.push({name: 'registration'})").black--text Register
</template>

<script>
export default {
  name: 'public-navigation',
  data () {
    return {}
  }
}
</script>
