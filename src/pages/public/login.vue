<template lang="pug">
#app
  v-app(dark)
    v-toolbar.white
      h1(style="color: black") AMS
      v-spacer
      public-navigation

    v-content
      v-container(fill-height, fluid)
        v-layout(align-center, justify-center)
          v-flex(xs12).display-flex.justify-center
            v-card(light, width="30%")
              v-card-title(primary-title).title Login
              v-card-text
                v-form(ref="loginForm")
                  v-layout(row, wrap)
                    v-flex(xs12)
                      v-text-field(
                        light,
                        prepend-icon="email",
                        v-model="input.email",
                        label="Email Address",
                        :rules="[inputRules()['required'], inputRules()['email']]",
                        @keyup.enter.native="login",
                        required
                      )

                    v-flex(xs12)
                      v-text-field(
                        light,
                        type="password",
                        prepend-icon="lock",
                        v-model="input.password",
                        label="Password",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="login",
                        required
                      )
              v-card-actions.display-flex.justify-end
                v-btn(
                  flat,
                  large,
                  color="primary",
                  @click.native.stop="login",
                  :loading="loading.login"
                ) Login
</template>

<script>
import { UserService } from '@/api'

export default {
  name: 'login',
  data () {
    return {
      input: {
        email: null,
        password: null
      },
      loading: {
        login: false
      }
    }
  },

  methods: {
    async login () {
      this.loading.login = false
      if (!this.$refs.loginForm.validate()) return

      try {
        this.loading.login = true
        await UserService.login(this.input.email, this.input.password)
        this.$router.push({name: 'dashboard'})
        this.loading.login = false
      } catch (e) {
        console.log(`[ERROR]`, e)
        this.loading.login = false
        this.displayToast(this.parseErrorRes(e), 'error')
      }
    }
  },

  components: {
    publicNavigation: () => import('@/components/public-navigation')
  }
}
</script>
