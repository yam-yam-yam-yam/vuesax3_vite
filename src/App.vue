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
  font-family: 'ACCchildrenheartOTF-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: ACCchildrenheartOTF-Regular;  
} 

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}
.vs-notifications {
  box-shadow: 0px 3px 5px #777777 !important; 
}
</style>
