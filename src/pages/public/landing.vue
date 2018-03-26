<template lang="pug">
#app
  v-app(dark)
    v-toolbar.white
      //- img(src="/static/images/logo.png", height="64px", width="128px")
      h1(style="color: black") AMS
      v-spacer
      public-navigation

    v-content
      section
        v-parallax(src="/static/images/landing-hero.jpeg", height="600")
          v-layout.white--text(column, align-center, justify-center)
            //- img(src="assets/vuetify.png", alt="Vuetify.js", height="200")
            h1.white--text.mb-2.text-xs-center.display-3 AMS
            .subheading.mb-3.text-xs-center Attendance Monitoring System
            v-btn.blue.lighten-2.mt-5(dark, large, href="/pre-made-themes")
              | Get Started
      section
        v-layout.my-5(column, wrap, align-center)
          v-flex.my-3(xs12, sm4)
            .text-xs-center
              h2.headline Featured Products

        carousel-3d(:autoplay="true", :autoplay-timeout="3500", :controls-visible="true")
          slide(v-for="(slide, idx) in items", :index="idx", :key="idx")
            figure
              img(:src="slide.src")
              figcaption
                h3.subheading {{ slide.text }}
                small {{ slide.description }}

      section
        v-parallax(src="/static/images/section.jpeg", height="380")
          v-layout(column, align-center, justify-center)
            .headline.white--text.mb-3.text-xs-center Our Mission
            p.subheading
              | Our vision is to be one of the frontrunners in providing solutions to Environmental and Water Analysis needs in the country. By carrying out this vision at every level of our organization, we will be recognized by our employees, customers and manufacturers as the best partner in the country, resulting in value for all.
      section
        v-container(grid-list-xl)
          v-layout.my-5(row, wrap, justify-center)
            v-flex(xs12, sm4)
              v-card.elevation-0.transparent
                v-card-title.layout.justify-center(primary-title)
                  .headline ABOUT
                v-card-text
                  | BLAISE-SCIENTIFIC TRADING is a local company engaged in the distribution of laboratory equipment and supplies primarily for Water and Environmental Analysis.
                  | With a team of young, creative, dynamic & dedicated professionals, we are pushing all areas in providing solutions to the needs of our clients to attain their fulfilment.
                  | This company believes in serving our customers by providing the accurate response to the requirements of our customers. Hence, we are for any and every obligation to our wide spectrum.
            v-flex(xs12, sm4, offset-sm1)
              v-card.elevation-0.transparent
                v-card-title.layout.justify-center(primary-title)
                  .headline Contact us
                v-list.transparent
                  v-list-tile
                    v-list-tile-action
                      v-icon.blue--text.text--lighten-2 phone
                    v-list-tile-content
                      v-list-tile-title 02-287-6743. Direct Line: 02-208-8494
                  v-list-tile
                    v-list-tile-action
                      v-icon.blue--text.text--lighten-2 place
                    v-list-tile-content
                      v-list-tile-title 94 Calaca St., NPC Vill., Sauyo, Quezon City 1116 Philippines
                  v-list-tile
                    v-list-tile-action
                      v-icon.blue--text.text--lighten-2 email
                    v-list-tile-content
                      v-list-tile-title blaisescientific@gmail.com
      v-footer.blue.darken-2(v-if="false")
        v-layout(row, wrap, align-center)
          v-flex(xs12)
            .white--text.ml-3
              | Made with
              v-icon.red--text favorite
              |               by
              a.white--text(href="https://vuetifyjs.com", target="_blank") Vuetify
              |               and
              a.white--text(href="https://github.com/vwxyzjn") Costa Huang
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      slides: 7,
      title: 'Your Logo',
      items: [
        {src: '/static/images/1.jpeg', text: 'Sample Featured Product 1', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/2.jpeg', text: 'Sample Featured Product 2', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/3.jpeg', text: 'Sample Featured Product 3', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/4.jpeg', text: 'Sample Featured Product 4', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/1.jpeg', text: 'Sample Featured Product 5', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/2.jpeg', text: 'Sample Featured Product 6', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/3.jpeg', text: 'Sample Featured Product 7', description: 'Lorem Ipsum Dolor Cit Amet'},
        {src: '/static/images/4.jpeg', text: 'Sample Featured Product 8', description: 'Lorem Ipsum Dolor Cit Amet'}
      ]
    }
  },

  components: {
    publicNavigation: () => import('@/components/public-navigation')
  }
}
</script>
