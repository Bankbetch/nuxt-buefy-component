<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="true"
      :fullwidth="false"
      :overlay="true"
      :right="false"
      :can-cancel="['escape', 'outside']"
      v-model="open"
      @close="$emit('close')"
    >
      <div class="p-1">
        <div class="is-flex is-justify-content-space-between">
          <div class="p-2">{{ header }}</div>
          <div @click="$emit('close')" class="is-clickable mt-1">
            <b-icon icon="close" size="is-medium"> </b-icon>
          </div>
        </div>
        <slot name="body" />
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
