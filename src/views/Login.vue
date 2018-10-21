<template>
  <div class="absolute-center text-center">
    <img src="@/assets/logo_1.png" width="80px" />

    <q-input color="yellow"
             v-model="user"
             float-label="User" /><br />
    <q-input color="yellow"
             v-model="pass"
             type="password"
             float-label="Pass" /><br />
    <q-btn color="red"
           class="full-width"
           rounded
           @click="$router.push('/home')"
           >Login</q-btn>

   <div class="row q-mt-md">
     <div class="col">
       <img src="@/assets/icones/ico-google.png" height="50px" />
     </div>
     <div class="col">
       <img src="@/assets/icones/ico-face.png" height="50px" />
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      user: '',
      pass: '',
    }
  }
}
</script>

<style>
  body{
    background-color: #2e1012;
  }
</style>
