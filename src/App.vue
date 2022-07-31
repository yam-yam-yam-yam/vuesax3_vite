<script setup>
import { ref } from 'vue'
import AlertComponent from "./components/Alert.vue";

const components = [
  AlertComponent
]
const currentComponent = ref(components[0])
</script>

<template>
  <component :is="currentComponent" />
</template>

<style>
@font-face {
    font-family: 'EarlyFontDiary';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
  font-family: 'EarlyFontDiary';
  font-size:15px;
}
.vs-notifications {
  box-shadow: 0px 3px 5px #777777 !important; 
}
</style>
