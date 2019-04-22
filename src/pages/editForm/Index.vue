<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1">step1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="step > 2">step2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3" :complete="step > 3">step3</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card>
                <v-container fluid>
                  <v-layout justify-center align-center row wrap>
                    <v-flex>
                      <v-text-field v-model="message" label="message"/>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
              <v-layout align-center="true">
                <v-spacer />
                <v-btn color="primary" @click="doUpdateMessage" :loading="loading">確認
                  <v-icon right dark>search</v-icon>
                </v-btn>
              </v-layout>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card>
                <v-container fluid>
                  <v-layout align-center="true">
                    <p>{{ messageState }}</p>
                  </v-layout>
                </v-container>
              </v-card>
              <v-layout align-center="true">
                <v-spacer />
                <v-btn @click="step = 1">戻る
                  <v-icon right dark>search</v-icon>
                </v-btn>
                <v-btn color="primary" @click="step = 3">決定
                  <v-icon right dark>search</v-icon>
                </v-btn>
              </v-layout>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-layout align-center="true">
                <p>OK</p>
              </v-layout>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'editForm',
  data: () => ({
    message: '',
    step: 1,
    loading: false
  }),
  computed: {
    ...mapState({
      messageState: state => state.message
    })
  },
  methods: {
    ...mapActions(['doUpdate']),
    doUpdateMessage () {
      this.loading = true
      this.doUpdate(this.message).then(() => {
        this.step = 2
        this.loading = false
      })
    }
  },
  created () {
    this.message = this.messageState
  }
}
</script>
