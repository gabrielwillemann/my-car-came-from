<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="col-grow text-center text-h5 q-my-lg">{{ $t('app:title') }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <div class="col-grow text-center text-h5">
          <a href="https://twitter.com/gabrielwilleman" target="_blank">
            <q-icon name="img:statics/twitter.svg" size="3rem" />
          </a>
          <a href="https://github.com/gabrielwillemann/" target="_blank">
            <q-icon name="img:statics/github.png" size="2rem" />
          </a>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data: () => ({}),
};
</script>
