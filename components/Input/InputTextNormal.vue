<template>
  <validation-provider v-slot="validationContext" :rules="rules" :name="label">
    <b-field
      :label="label"
      :horizontal="horizontal"
      :message="validationContext.errors[0]"
      :type="validationContext.errors[0] ? 'is-danger' : ''"
    >
      <b-input
        :state="getValidationState(validationContext)"
        :value="value"
        :name="label"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :disabled="disabled"
        type="text"
        trim
        @keyup.enter="$emit('enter', $event)"
        @input="$emit('input', $event)"
      ></b-input>
    </b-field>
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
    maxlength: {
      type: Number,
      default: 1000000000000,
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
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({}),
  },
}
</script>
