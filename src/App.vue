<template>
    <router-view v-loading="$store.state.loading"></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>
