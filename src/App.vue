<script setup>
import { ref } from 'vue'
import AlertComponent from "./components/Alert.vue";
import AvatarComponent from "./components/Avatar.vue";
import LoadlingComponent from "./components/Loadling.vue";

const components = [
  AlertComponent,
  AvatarComponent,
  LoadlingComponent
]
const currentComponent = ref(components[0])
</script>

<template>
  <vs-tabs>
    <vs-tab v-for="component,i in components" :key="`${component}_${i}`" :label="component.__name" @click="currentComponent = components[i]">
      <component :is="currentComponent" />
    </vs-tab>
  </vs-tabs>
</template>

<style>
@font-face {
  font-family: 'ACCchildrenheartOTF-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: ACCchildrenheartOTF-Regular;  
} 

/* 전체적용 커스텀 */
button:focus {
  outline: none !important;
}
</style>
