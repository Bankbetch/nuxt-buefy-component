<template>
  <validation-provider v-slot="validationContext" :rules="rules" :name="label">
    <b-field
      class="file is-primary"
      :class="{ 'has-name': !!value }"
      :label="label"
      :horizontal="horizontal"
      :message="validationContext.errors[0]"
      :type="validationContext.errors[0] ? 'is-danger' : ''"
    >
      <b-upload
        :state="getValidationState(validationContext)"
        :value="value"
        :name="label"
        :disabled="disabled"
        :accept="accept"
        type="text"
        trim
        @keyup.enter="$emit('enter', $event)"
        @input="$emit('input', $event)"
      >
        <span class="file-cta">
          <b-icon class="file-icon" icon="upload"></b-icon>
          <span class="file-label">{{
            value ? value.name : 'Click to upload'
          }}</span>
        </span>
      </b-upload>
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
    horizontal: {
      type: Boolean,
      default: true,
    },
    accept: {
      type: String,
      default: 'image/png, image/jpeg',
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
