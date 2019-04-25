<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex>
        <v-layout row wrap>
          <v-flex>
            <v-toolbar dense>
              <v-toolbar-title>Info</v-toolbar-title>
            </v-toolbar>
            <v-card>
              <v-container>
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field label="id" :value="getItem.id" hide-details readonly/>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex class="pt-3">
                    <v-text-field label="name" :value="getItem.name" hide-details readonly/>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex class="pt-3">
                    <v-text-field label="text" :value="getItem.text" hide-details readonly/>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'info_show',
  computed: {
    getItem: function () {
      return this.$route.params.item
    }
  }
}
</script>
