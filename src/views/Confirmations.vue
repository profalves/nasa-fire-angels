<template>
  <div style="background-color: white; height: 240vh">
    <!-- <img src="@/assets/05.png" class="responsive" @click="$router.push('/finish')"/> -->
    <q-list highlight no-border>
      <q-item>
        <q-item-main>
          <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                   data-projection="EPSG:4326" style="height: 200px;">
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
                  <font-awesome-icon icon="fire" style="color: red;" />
                </div>
              </template>
            </vl-overlay>

          </vl-map>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <div class="row text-center">
            <div class="col">
              <strong>Latitude</strong><br />
              {{center[1]}}
            </div>
            <div class="col">
              <strong>Longitude</strong><br />
              {{center[0]}}
            </div>
            <div class="col">
              <strong>Height</strong><br />
              394m
            </div>
          </div>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <div class="row">
            <div class="col q-pt-sm">
              <div class="q-title">{{datetime}}</div>
            </div>
            <div class="col text-right">
              <h3 class="no-margin">29°C</h3>
              <small>31°C/25°C</small><br />
              <small>Humidity 22%</small><br />
              <small>Wind 30km/h</small>
            </div>
          </div>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main label="Vegetation" />
        <q-item-side right>
          Caatinga
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Evolution" />
        <q-item-side right>
          Iniciation
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Type" />
        <q-item-side right>
          Ground
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Size" />
        <q-item-side right>
          Normal
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Conductor" />
        <q-item-side right>
          Wind
        </q-item-side>
      </q-item>
      <q-item-separator />
      <q-item>
        <q-item-main label="Protected Area" />
        <q-item-side right>
          <q-toggle color="secondary" v-model="pa" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Private Area" />
        <q-item-side right>
          <q-toggle color="secondary" v-model="pt" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Public Area" />
        <q-item-side right>
          <q-toggle color="secondary" v-model="pb" />
        </q-item-side>
      </q-item>
      <q-item-separator />
      <q-item>
        <q-item-main>
          <q-datetime v-model="start" type="datetime" float-label="Start" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-datetime v-model="detec" type="datetime" float-label="Detection" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-datetime v-model="fa" type="datetime" float-label="First Attack" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-datetime v-model="control" type="datetime" float-label="Control" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-datetime v-model="ext" type="datetime" float-label="Extinction" />
        </q-item-main>
      </q-item>
      <q-item>
        <q-input
          v-model="obs"
          type="textarea"
          float-label="Textarea"
          :max-height="100"
          rows="2"
        />
      </q-item>
    </q-list>
    <div class="text-center">
      <q-btn rounded color="red" @click="$router.push('/finish')">
        next <i class="material-icons">keyboard_arrow_right</i>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      datetime: new Date().toUTCString(),
      zoom: 8,
      center: [-41.244, -13.174],
      rotation: 0,
      geolocPosition: '',
      overlayCoordinate: [-41.244, -13.174],
      local: '',
      search: '',
      opened: false,
      pa: false,
      pt: false,
      pb: false,
      start: '',
      detec: '',
      fa: '',
      control: '',
      ext: '',
      obs: ''
    }
  }
}
</script>

<style>
  .no-marign{
    margin: 0 !important;
  }
</style>
