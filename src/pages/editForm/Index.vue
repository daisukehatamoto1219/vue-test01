<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex>
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
          <v-btn color="primary" @click="doUpdateMessage" :loading="loading">実行
            <v-icon right dark>search</v-icon>
          </v-btn>
        </v-layout>
        <v-layout align-center="true">
          <p>{{ messageState }}</p>
        </v-layout>
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
      this.doUpdate(this.message).then(() => { this.loading = false })
    }
  },
  created () {
    this.message = this.messageState
  }
}
</script>
