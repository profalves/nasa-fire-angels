<template>
  <q-page>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-overlay id="user" :position="overlayCoordinate">
        <template slot-scope="scope">
          <div class="overlay-content">
            <font-awesome-icon icon="user" style="color: green;" />
          </div>
        </template>
      </vl-overlay>

      <div v-for="(coord, index) in fires" :key="index">
        <vl-overlay :position="coord.coords">
          <template slot-scope="scope">
            <div class="overlay-content" @click="getLocal(coord)">
              <q-tooltip>
                {{coord.coords}}
              </q-tooltip>
              <font-awesome-icon icon="fire" style="color: orange;" />
            </div>
          </template>
        </vl-overlay>
      </div>

    </vl-map>
    <div style="padding: 20px">

      Incendios: {{fires.length}}<br/>

      coordenadas: {{local}}

    </div>
  </q-page>
</template>

<style>
</style>

<script>
import incendios from '@/data/fire.json'
export default {
  name: 'PageHome',
  data () {
    return {
      // incendios,
      fires: incendios.map(row => ({
        coords: [row.longitude, row.latitude],
        color: 'orange',
        frp: row.frp
      })),
      zoom: 7,
      center: [ -38.5127594, -12.9696622 ],
      rotation: 0,
      geolocPosition: '',
      overlayCoordinate: [-38.511258999999995, -12.9684824],
      local: ''
    }
  },
  methods:{
    getLocal(coord){
      console.log('clicked:', coord)
      this.local = coord.coords
    }
  }
}
</script>
