<template>
  <div class="fixed-center text-center">
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn color="secondary" @click="$router.push('/')">Go back</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
