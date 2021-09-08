<template>
  <validation-provider v-slot="validationContext" :rules="rules" :name="label">
    <b-field
      :label="label"
      :horizontal="horizontal"
      :message="validationContext.errors[0]"
      :type="validationContext.errors[0] ? 'is-danger' : ''"
    >
      <b-autocomplete
        :state="getValidationState(validationContext)"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :data="data"
        :loading="isFetching"
        :check-infinite-scroll="true"
        @typing="getAsyncData"
        @select="(option) => $emit('input', option)"
        @infinite-scroll="getMoreAsyncData"
      >
        <template slot-scope="props">
          <slot name="props" :option="props" />
        </template>
        <template #footer>
          <span v-show="page > totalPages" class="has-text-grey">
            Thats it! No more movies found.
          </span>
        </template></b-autocomplete
      >
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
    field: {
      type: String,
      default: 'name',
    },
    storePath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFetching: false,
      page: 1,
      totalPages: 1,
      name: '',
    }
  },
  methods: {
    clearValue() {
      this.data = []
      this.page = 1
      this.totalPages = 1
    },
    getAsyncData: _.debounce(function (name) {
      if (this.name !== name) {
        this.name = name
        this.clearValue()
      }
      // String cleared
      if (!name.length) {
        this.clearValue()
        return
      }
      // Reached last page
      if (this.page > this.totalPages) {
        return
      }

      this.isFetching = true
      this.$api
        .$get(this.storePath, { skip: this.page })
        .then(({ data }) => {
          data.results.forEach((item) => this.data.push(item))
          this.page++
          this.totalPages = data.total_pages
        })
        .catch((error) => {
          throw error
        })
        .finally(() => {
          this.isFetching = false
        })
    }, 500),
    getMoreAsyncData: _.debounce(function () {
      this.getAsyncData(this.name)
    }, 250),
  },
  computed: {
    ...mapState({}),
  },
  beforeDestroy() {
    this.clearValue()
  },
}
</script>
