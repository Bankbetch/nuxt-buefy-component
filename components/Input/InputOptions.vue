<template>
  <validation-provider v-slot="validationContext" :rules="rules" :name="label">
    <b-field
      :label="label"
      :horizontal="horizontal"
      :message="validationContext.errors[0]"
      :type="validationContext.errors[0] ? 'is-danger' : ''"
    >
      <b-select
        :state="getValidationState(validationContext)"
        :placeholder="placeholder"
        :disabled="disabled"
        :name="label"
        @input="$emit('input', $event)"
      >
        <option v-for="(item, index) of options" :key="index" :value="value">
          {{ item }}
        </option>
      </b-select>
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
