<script setup>
import { ref } from 'vue'
import AlertComponent from "./components/Alert.vue";
import AvatarComponent from "./components/Avatar.vue";
import ButtonComponent from "./components/Button.vue"
import CardComponent from "./components/Card.vue"
import CheckboxComponent from "./components/Checkbox.vue"
import ChipComponent from "./components/Chip.vue"
import CollapseComponent from "./components/Collapse.vue"
import DialogsComponent from "./components/Dialogs.vue"
import DividerComponent from "./components/Divider.vue"
import ImagesComponent from "./components/Images.vue"
import InputComponent from './components/Input.vue'
import ListComponent from './components/List.vue'
import LoadlingComponent from "./components/Loadling.vue";
import NavbarComponent from "./components/Navbar.vue";
import NotificationsComponent from "./components/Notifications.vue"

const components = [
  AlertComponent,
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ChipComponent,
  CollapseComponent,
  DialogsComponent,
  DividerComponent,
  ImagesComponent,
  InputComponent,
  ListComponent,
  LoadlingComponent,
  NavbarComponent,
  NotificationsComponent
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

</style>
