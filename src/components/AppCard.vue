<script setup>
    import { ref, watch } from 'vue';

    const props = defineProps(["title", "subtitle", "content", "isFavorite"]);
    const emit = defineEmits(['update-favorite']);
    const localIsFavorite = ref(props.isFavorite);

    watch(() => props.isFavorite, (newVal) => {
        localIsFavorite.value = newVal;
    });

    const toggleFavorite = () => {
    localIsFavorite.value = !localIsFavorite.value;
    emit('update-favorite', localIsFavorite.value);
    };
</script>

<template>
  <main :class="{'bg-gray-100': localIsFavorite, 'bg-white': !localIsFavorite}" class="p-8 rounded-lg shadow-md max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto my-10">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <h4 class="text-lg font-semibold">{{ subtitle }}</h4>
      </div>
      <button @click="toggleFavorite" class="focus:outline-none text-2xl">
        <i :class="{'fas fa-star text-yellow-400': localIsFavorite, 'far fa-star text-gray-500 hover:text-yellow-400': !localIsFavorite}"></i>
      </button>
    </div>
    <p class="mb-4">{{ content }}</p>
  </main>
</template>
