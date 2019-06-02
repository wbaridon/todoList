<template>
  <section>
    <v-layout v-for="item in list" :key="item.id">
     <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
            <h3 class="headline mb-0">{{item.title}}</h3>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="blue">En lire +</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="orange">Modifier</v-btn>
          <v-btn flat color="red">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  created () {
    this.$store.dispatch('initList')
  },
  mounted () {
    this.$store.dispatch('addItem', 'test')
  },
  computed: {
      ...mapGetters({
          list: 'getList'
      })
  },
  data () {
    return {

    }
  }
}
</script>
