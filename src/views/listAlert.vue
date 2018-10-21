<template>
  <q-page class="layout-padding bg-white list">
    <q-list no-border>
      <q-collapsible group="group"
                     :label="select"
                     class="uppercase"
                     ref="vegetation">
        <q-select
          v-model="select"
          placeholder="Select a type of vegetation"
          :options="[
            { label: 'Caatinga', value: 'Caatinga' },
            { label: 'Fields', value: 'Fields' },
            { label: 'Cerrado', value: 'Cerrado' },
            { label: 'Amazon Forest', value: 'Amazon Forest' },
            { label: 'Mangues', value: 'Mangues' },
            { label: 'Atlantic Forest', value: 'Atlantic Forest' },
            { label: 'Araucaria Forest', value: 'Araucaria Forest' },
            { label: 'coconut Grove', value: 'coconut Grove' },
            { label: 'Pantanal', value: 'Pantanal' }
          ]"
          @input="$refs.vegetation.hide($refs.evolution.show())"
        />
      </q-collapsible>
      <q-collapsible group="group" label="EVOLUTION" ref="evolution">
        <q-list no-border>
          <q-item>
            <q-item-main>Iniciation</q-item-main>
            <q-item-side right>
              <q-toggle color="secondary" v-model="init" />
            </q-item-side>
          </q-item>
          <q-item>
            <q-item-main>Propagation</q-item-main>
            <q-item-side right>
              <q-toggle color="secondary" v-model="propag" />
            </q-item-side>
          </q-item>
          <q-item>
            <q-item-main>Extinction</q-item-main>
            <q-item-side right>
              <q-toggle color="secondary" v-model="extinct" />
            </q-item-side>
          </q-item>
        </q-list>
      </q-collapsible>
      <q-collapsible group="group" label="TYPE">
        ...
      </q-collapsible>
      <q-collapsible group="group" label="SIZE">
        ...
      </q-collapsible>
      <q-collapsible group="group" label="CONDUCTOR">
        ...
      </q-collapsible>
    </q-list>

    <q-page-sticky position="bottom" :offset="[18, 18]" style="z-index: 5">
      <q-btn rounded color="red" @click="$router.push('confirmations')">
        next <i class="material-icons">keyboard_arrow_right</i>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'ListAlerts',
  data(){
    return{
      init: false,
      propag: false,
      extinct: false,
      select: 'type of vegetation'
    }
  }
}
</script>

<style>
  body{
    background-color: #2e1012;
    overflow-x: hidden;
  }
  .list{
    background-color: #fff;
    height: 95vh;
  }
</style>
