<template lang="pug">
  v-app#inspire
    v-navigation-drawer(fixed, :clipped="$vuetify.breakpoint.mdAndUp", app, v-model="drawer")
      v-list(dense)
        template(v-for="item in items")
          v-layout(row, v-if="item.heading", align-center, :key="item.heading")
            v-flex(xs6)
              v-subheader(v-if="item.heading")
                | {{ item.heading }}
            v-flex.text-xs-center(xs6)
              a.body-2.black--text(href="#!") EDIT
          v-list-group(v-else-if="item.children", v-model="item.model", :key="item.text", :prepend-icon="item.model ? item.icon : item['icon-alt']", append-icon)
            v-list-tile(slot="activator")
              v-list-tile-content
                v-list-tile-title
                  | {{ item.text }}
            v-list-tile(v-for="(child, i) in item.children", :key="i", @click="$router.push({name: child.routeName})")
              v-list-tile-action(v-if="child.icon")
                v-icon {{ child.icon }}
              v-list-tile-content
                v-list-tile-title
                  | {{ child.text }}
          v-list-tile(v-else, @click="$router.push({name: item.routeName})", :key="item.text")
            v-list-tile-action
              v-icon {{ item.icon }}
            v-list-tile-content
              v-list-tile-title
                | {{ item.text }}
    v-toolbar(color="blue darken-3", dark, app, :clipped-left="$vuetify.breakpoint.mdAndUp", fixed)
      v-toolbar-title.ml-0.pl-3(style="width: 300px")
        v-toolbar-side-icon(@click.stop="drawer = !drawer")
        span.hidden-sm-and-down AMS v1.0
      span.title(v-if="$route && $route.meta") {{ $route.meta.title }}
      v-spacer
      //- v-btn(icon)
      //-   v-icon apps
      //- v-btn(icon)
      //-   v-icon notifications
      span(v-if="getUser") Howdy, {{ getUser.firstname }}
      v-btn(icon, large)
        v-avatar(size="32px", tile)
          //- img(src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/24909985_10208150294635202_1303972830500063392_n.jpg?_nc_eui2=v1%3AAeFfuP3rF2bs2FHuVS2hbZwtbVYOSmVWzQ9XyMNrJ0X39GYKWWH3uLnCrq5ITPKKuIF_DgXdOKgSValmpOJHwXQM07xPuhuoYfP5b9P_fgkiJg&oh=74f4db153b4c57da4f56fddfdf48ec99&oe=5B059F9A")
    v-content
      v-container(fluid, fill-height)
        router-view
</template>

<script>
import { mapGetters } from 'vuex'
import utils from '@/utils'
export default {
  name: 'web-container',
  data () {
    return {
      drawer: null,
      items: utils.menuItems
    }
  },

  computed: {
    ...mapGetters([
      'getUser'
    ])
  }
}
</script>
