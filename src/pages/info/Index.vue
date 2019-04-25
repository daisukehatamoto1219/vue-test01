<template>
  <v-container fluid fill-height grid-list-lg>
    <v-layout justify-center>
      <v-flex>
        <v-card slot="search-form">
          <v-container class="fluid">
            <v-layout row wrap align-center="true">
              <v-flex xs12 sm12 md4 lg4>
                <v-text-field label="id" v-model="conditions.id" maxlength="10"
                              data-vv-as="id" data-vv-name="id" v-validate="'numeric|max:10'" :error-messages="errors.collect('id')" />
              </v-flex>
              <v-flex xs12 sm12 md4 lg4>
                <v-text-field label="name" v-model="conditions.name" />
              </v-flex>
              <v-flex xs12 sm12 md4 lg4>
                <v-text-field label="text" v-model="conditions.text" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-layout>
          <v-flex xs12 class="text-xs-right">
            <v-btn color="primary" @click="search">検索
              <v-icon right dark>search</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout class="pt-5">
          <v-flex xs12>
            <v-card slot="search-results">
              <v-data-table :headers="headers" :items="items" :loading="gettingItems">
                <template slot="items" slot-scope="props">
                  <tr class="as-link" @click="showDetail(props.item)">
                    <td class="text-xs">{{ props.item.id }}</td>
                    <td class="text-xs">{{ props.item.name }}</td>
                    <td class="text-xs">{{ props.item.text }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'info_index',
  data () {
    return {
      headers: [
        { text: 'id', value: 'id', align: 'left', sortable: false },
        { text: 'name', value: 'requested_at', align: 'left', sortable: false },
        { text: 'text', value: 'approved_at', align: 'left', sortable: false }
      ],
      conditions: {
        id: '',
        name: '',
        text: ''
      },
      gettingItems: false,
      items: []
    }
  },
  computed: {
    setItems: function () {
      let items = []
      Array.apply(null, { length: 20 }).forEach((v, i) => {
        items[i] = {
          id: i.toString(),
          name: 'name' + i,
          text: 'text' + i
        }
      })
      return items
    }
  },
  methods: {
    showDetail (e) {
      this.$router.push({ name: 'info_show', params: { id: e.id, item: e } })
    },
    findBy (conditions) {
      let items = this.setItems
      Object.keys(conditions).forEach((key) => {
        items = items.filter(element => (element[key].match(this.conditions[key]) || this.conditions[key] === ''))
      })
      this.items = items
    },
    search () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.findBy(this.conditions)
        }
      })
    }
  },
  created () {
    this.items = this.setItems
  }
}
</script>
