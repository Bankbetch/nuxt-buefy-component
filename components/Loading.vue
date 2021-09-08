<template>
  <section>
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    >
      <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin">
      </b-icon>
    </b-loading>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isFullPage: true,
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.layout.isLoading,
    }),
  },
}
</script>
