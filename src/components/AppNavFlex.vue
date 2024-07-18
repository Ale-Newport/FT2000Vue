<script setup>
  import { ref, defineEmits } from 'vue';

  const emit = defineEmits(['toggle-switch-change']);
  const showMenu = ref(false);
  const isToggleSwitchOn = ref(false);

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  const toggleSwitch = () => {
    isToggleSwitchOn.value = !isToggleSwitchOn.value;
    emit('toggle-switch-change', isToggleSwitchOn.value);
  };

  const redirectToCampusVirtual = () => {
    window.open('https://gesforcan.com/login/index.php/?theme=ftv2000', '_blank')
  }
</script>

<template>
  <nav class="relative bg-blue-900 flex flex-col md:flex-row justify-between items-center min-h-28 py-4 pr-10">
    <div class="flex-shrink-0 mt-6 md:mt-0">
      <router-link to="/">
        <svg width="250" height="70" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="250" height="100" fill="url(#pattern0_438_312)"/>
          <defs>
          <pattern id="pattern0_438_312" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_438_312" transform="matrix(0.00180832 0 0 0.0045208 0 -0.227848)"/>
          </pattern>
          <image id="image0_438_312" width="553" height="322" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>
      </router-link>
    </div>

    <div class="flex flex-col items-center md:items-end w-full md:w-auto mt-5 md:mt-0 md:ml-auto space-y-2 md:space-y-0">
      <div class="flex items-center space-x-2 mb-2 md:mb-0">
        <button @click="redirectToCampusVirtual" class="text-yellow-200 text-lg font-bold hover:text-yellow-500 flex items-center justify-center px-2 py-1 border border-yellow-200 rounded-full hover:border-yellow-500">Campus virtual</button>
        
        <label for="toggle-switch" class="flex items-center cursor-pointer pl-5">
          <div class="relative">
            <input type="checkbox" id="toggle-switch" class="sr-only peer" @change="toggleSwitch">
            <div class="block bg-gray-300 w-10 h-6 rounded-full peer-checked:bg-yellow-400"></div>
            <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></div>
          </div>
        </label>

        <ul class="flex space-x-2 pl-5">
          <a href="https://www.instagram.com/ftv_2000/" target="_blank" class="text-white text-xl hover:text-gray-400">
            <i class="fab fa-instagram h-5"></i>
          </a>
          <a href="https://es.linkedin.com/company/fuerteventura2000" target="_blank" class="text-white text-xl hover:text-gray-400">
            <i class="fab fa-linkedin h-5"></i>
          </a>
          <a href="https://www.facebook.com/fuerteventura2000" target="_blank" class="text-white text-xl hover:text-gray-400">
            <i class="fab fa-facebook h-5"></i>
          </a>
        </ul>
      </div>

      <ul class="hidden md:flex flex-row space-x-4 pt-5 lg:space-x-10 md:justify-end">
        <li><router-link to="/formacion" class="text-yellow-200 text-sm hover:text-yellow-500">Formación</router-link></li>
        <li><router-link to="/agencia" class="text-yellow-200 text-sm hover:text-yellow-500">Agencia de colocación</router-link></li>
        <li><router-link to="/conocenos" class="text-yellow-200 text-sm hover:text-yellow-500">Conócenos</router-link></li>
        <li><router-link to="/contacto" class="text-yellow-200 text-sm hover:text-yellow-500">Contacto</router-link></li>
        <li><router-link to="/canalEtico" class="text-yellow-200 text-sm hover:text-yellow-500">Canal ético</router-link></li>
      </ul>
    </div>

    <div class="md:hidden mt-1">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <i class="fas fa-bars w-8 h-8 text-2xl"></i>
      </button>
    </div>

    <ul :class="showMenu ? 'flex flex-col' : 'hidden'" class="md:hidden w-full space-y-2">
      <li><router-link to="/formacion" class="block text-yellow-200 hover:text-yellow-500 bg-blue-800 px-3 py-2 rounded">Formación</router-link></li>
      <li><router-link to="/agencia" class="block text-yellow-200 hover:text-yellow-500 bg-blue-800 px-3 py-2 rounded">Agencia de colocación</router-link></li>
      <li><router-link to="/conocenos" class="block text-yellow-200 hover:text-yellow-500 bg-blue-800 px-3 py-2 rounded">Conócenos</router-link></li>
      <li><router-link to="/contacto" class="block text-yellow-200 hover:text-yellow-500 bg-blue-800 px-3 py-2 rounded">Contacto</router-link></li>
      <li><router-link to="/canalEtico" class="block text-yellow-200 hover:text-yellow-500 bg-blue-800 px-3 py-2 rounded">Canal ético</router-link></li>
    </ul>
  </nav>
</template>
