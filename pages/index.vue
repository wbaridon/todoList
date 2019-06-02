<template>
  <section class="container">
      {{list}}
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
