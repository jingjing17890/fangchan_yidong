<template>
  <bq-loading v-model="isLoading.isLoading" :top="loadingTop.isLoadingTop"></bq-loading>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'bq-base',
  computed: {
    ...mapState({
      isLoading: state => state,
      loadingTop: state => state
    })
  }
}
</script>
