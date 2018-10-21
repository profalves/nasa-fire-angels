<template>
  <q-page padding class="absolute-center text-white text-center">
    <h4>Fire Angels</h4>
    <div>Anderson Aguiar (mecatronic enginner)</div>
    <div>Bruno Santos (geologist)</div>
    <div>Juan Sobral (geologist)</div>
    <div>Paulo Novaes (designer)</div>
    <div>Rodrigo Alves (developer)</div>

    <q-page-sticky position="bottom" :offset="[18, 18]" style="z-index: 5">
      <q-btn rounded color="red" @click="$router.back()">
        <i class="material-icons">keyboard_arrow_left</i> back
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>
