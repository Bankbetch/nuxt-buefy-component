<template>
  <validation-provider v-slot="validationContext" :rules="rules" :name="label">
    <b-checkbox
      :state="getValidationState(validationContext)"
      :value="value"
      :disabled="disabled"
      :type="validationContext.errors[0] ? 'is-danger' : ''"
      @input="$emit('input', $event)"
    >
      {{ label }}
    </b-checkbox>
  </validation-provider>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: undefined,
    },
    required: {
      type: String,
      default: 'required',
    },
    rules: {
      type: [Object, String],
      default: () => {
        return {
          required: false,
        }
      },
    },
    value: {
      type: undefined,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    options: {
      type: [Object, Array],
      default: () => {
        return []
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({}),
  },
}
</script>
