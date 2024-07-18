<script setup>
  import { ref } from 'vue';
  import AppNavFlex from "./components/AppNavFlex.vue";
  import AppFooter from "./components/AppFooter.vue";
  
  const isSwitchOn = ref(false);
  
  const handleSwitchChange = (newValue) => {
    isSwitchOn.value = newValue;
    console.log(isSwitchOn.value);
  };
</script>
  
<template>
  <AppNavFlex @toggle-switch-change="handleSwitchChange"/>
  
  <router-view :is-switch-on="isSwitchOn"></router-view>
  
  <AppFooter></AppFooter>
</template>
  