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
            v-card(light, width="60%")
              v-card-title(primary-title).title Client Registration
              v-card-text
                h3.subheading.mb-1 #[strong() Personal Details]
                v-form(ref="registrationForm")
                  v-layout(row, wrap)
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-account",
                        v-model="input.firstname",
                        label="First Name",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )

                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-account",
                        v-model="input.lastname",
                        label="Last Name",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-cellphone-iphone",
                        v-model="input.mobileNo",
                        label="Mobile no",
                        :rules="[inputRules()['phoneNumber']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-phone-classic",
                        v-model="input.phoneNo",
                        label="Tel no",
                        :rules="[inputRules()['phoneNumber']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-email",
                        v-model="input.email",
                        label="Email Address",
                        :rules="[inputRules()['email']]",
                        @keyup.enter.native="registerClient",
                        required
                      )

                  h3.subheading.mt-3.mb-1 #[strong() Location]
                  v-layout(row, wrap)
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-map-marker",
                        v-model="input.address",
                        label="Address",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-city",
                        v-model="input.city",
                        label="City",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-zip-box",
                        v-model="input.zipCode",
                        label="Postal Code",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-select(
                        light,
                        single-line,
                        prepend-icon="public",
                        label="Country",
                        :items="country.list",
                        v-model="country.selected",
                        item-value="code",
                        item-text="text"
                      )

                  h3.subheading.mt-3.mb-1 #[strong() Company Profile]
                  v-layout(row, wrap)
                    v-flex(xs12)
                      v-select(
                        light,
                        single-line,
                        prepend-icon="mdi-help-network",
                        label="Designation",
                        :items="designation.list",
                        v-model="designation.selected",
                        item-value="code",
                        item-text="text"
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-briefcase",
                        v-model="input.lineBusiness",
                        label="Line of Business",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-domain",
                        v-model="input.companyName",
                        label="Company Name",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-phone-classic",
                        v-model="input.companyLandLine",
                        label="Company Landline",
                        :rules="[inputRules()['phoneNumber']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-email",
                        v-model="input.companyEmail",
                        label="Company Email",
                        :rules="[inputRules()['email']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-map-marker",
                        v-model="input.companyAddress",
                        label="Address",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-city",
                        v-model="input.companyCity",
                        label="City",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-zip-box",
                        v-model="input.companyZipCode",
                        label="Postal Code",
                        :rules="[inputRules()['required']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-select(
                        light,
                        single-line,
                        prepend-icon="public",
                        label="Country",
                        :items="country.list",
                        v-model="input.companyCountry",
                        item-value="code",
                        item-text="text"
                      )

                  h3.subheading.mt-3.mb-1 #[strong() Account Details]
                  v-layout(row, wrap)
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        type="password",
                        prepend-icon="mdi-lock",
                        v-model="input.password",
                        label="Password",
                        :rules="[inputRules()['required']]"
                        @keyup.enter.native="registerClient",
                        required
                      )
                    v-flex(xs12)
                      v-text-field(
                        light,
                        single-line,
                        prepend-icon="mdi-lock-outline",
                        type="password",
                        v-model="verifyPassword",
                        label="Confirm Password",
                        :rules="[inputRules()['required'], customRules()['samePassword']]",
                        @keyup.enter.native="registerClient",
                        required
                      )
              v-card-actions.display-flex.justify-end
                v-btn(
                  flat,
                  large,
                  color="primary",
                  @click.native.stop="registerClient",
                  :loading="loading.registration"
                ) Create Account
</template>

<script>
import { UserService } from '@/api'
import { merge } from 'lodash/object'
export default {
  name: 'login',
  data () {
    return {
      verifyPassword: null,
      customRules () {
        return {
          samePassword: (value) => {
            return this.input.password === this.verifyPassword || 'Password does not match'
          }
        }
      },
      input: {
        firstname: null,
        lastname: null,
        middlename: '',
        address: null,
        city: null,
        zipCode: null,
        mobileNo: null,
        phoneNo: null,
        email: null,
        password: null,
        companyName: null,
        companyCountry: 'PH',
        lineBusiness: null,
        companyEmail: null,
        companyAddress: null,
        companyCity: null,
        companyZipCode: null,
        companyLandLine: null
      },
      // input: {
      //   firstname: '123123',
      //   lastname: '123123',
      //   middlename: '123123',
      //   address: '123123',
      //   city: '123123',
      //   zipCode: '123123',
      //   mobileNo: '123123',
      //   phoneNo: '123123',
      //   email: 'testing2@test.com',
      //   password: '123123',
      //   companyName: '123123',
      //   companyCountry: 'PH',
      //   lineBusiness: '123123',
      //   companyEmail: 'testing2@test.com',
      //   companyAddress: '123123',
      //   companyCity: '123123',
      //   companyZipCode: '123123',
      //   companyLandLine: '123123'
      // },
      country: {
        list: [{code: 'PH', text: 'Philippines'}],
        selected: 'PH'
      },
      designation: {
        list: [{code: 'PRIVATE', text: 'Private'}, {code: 'GOVERNMENT', text: 'Government'}],
        selected: 'PRIVATE'
      },
      loading: {
        registration: false
      }
    }
  },

  methods: {
    async registerClient () {
      if (!this.$refs.registrationForm.validate()) {
        this.displayToast('Please fill-up all the required fields.', 'error')
        return
      }

      this.loading.registration = true
      try {
        let payload = merge(this.input, {
          designation: this.designation.selected,
          userType: 'CLIENT',
          country: this.country.selected,
          confirm_password: this.verifyPassword
        })
        console.log(`this.input`, payload)

        await UserService.register(payload)
        this.displayToast('Successfully registered!')
        this.loading.registration = false
      } catch (e) {
        this.loading.registration = false
        this.displayToast(this.parseErrorRes(e) || 'An error occured. Please try again', 'error')
      }
    },

    async login () {
      this.loading.login = false
      if (!this.$refs.registrationForm.validate()) return

      try {
        this.loading.login = true
        await UserService.login(this.input.email, this.input.password)

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
