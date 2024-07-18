<script setup>
  import { ref, computed, defineProps } from 'vue';
  import AppCard from "../components/AppCard.vue";

  const props = defineProps({
    isSwitchOn: Boolean
  });

  const appCardData = ref([
    {
      title: "Subvención cofinanciada por el Fondo Europeo de Desarrollo Regional y el Gobierno de Canarias.",
      subtitle: "",
      content: "Escuela de Hostelería Europea, S.A. ha recibido una subvención cofinanciada al 85% por el Fondo Europeo de Desarrollo Regional y subvencionada en un 70% por el Gobierno de Canarias dentro de los Bonos para la Transformación Digital de la Empresa Canaria, Ejercicio 2020, motivado por la crisis sanitaria de la COVID-19.",
      isFavorite: false
    },
    {
      title: "LOREM IPSUM",
      subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aliquam quis eius esse enim nesciunt.",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente commodi doloremque iste repudiandae earum quas, a odio fuga? Quibusdam nam assumenda adipisci quis optio, enim modi animi, sed velit minus alias, cupiditate fugiat cum saepe praesentium aspernatur ullam mollitia tenetur quasi rerum nihil itaque consequatur quae? Sunt eum tempore optio sed unde error iste? Id, voluptas vero. Impedit architecto praesentium ab id sequi fuga. Non, iusto perferendis sapiente nisi voluptatibus tenetur rem velit veritatis. Blanditiis eveniet impedit, ducimus voluptatum ea fugit? Modi sunt ullam in dignissimos odit sed dolores, explicabo quo neque, animi minus nobis ea labore mollitia aut harum!",
      isFavorite: false
    },
    {
      title: "TITULO",
      subtitle: "Subtitulo",
      content: "Contenido",
      isFavorite: false
    },
  ]);

  const filteredCards = computed(() => {
    if (props.isSwitchOn) {
      return appCardData.value.filter(card => card.isFavorite);
    }
    return appCardData.value;
  });

  const updateFavoriteStatus = (index, isFavorite) => {
    appCardData.value[index].isFavorite = isFavorite;
  };
</script>

<template>

  <div class="grid grid-cols-3 gap-4">
    <div class="flex justify-center items-center my-3">
      <div class="w-full h-full max-w-[200px] max-h-[150px]">
        <img class="w-full h-full object-contain" src="https://www.fuerteventura2000.com/images/logo_canarias_avanza-removebg-preview.png" alt="Logo Canarias Avanza">
      </div>
    </div>
    <div class="flex justify-center items-center my-3">
      <div class="w-full h-full max-w-[200px] max-h-[150px]">
        <img class="w-full h-full object-contain" src="https://www.fuerteventura2000.com/images/Logo_cent_color_15mm-removebg-preview.png" alt="Logo Cent Color">
      </div>
    </div>
    <div class="flex justify-center items-center my-3">
      <div class="w-full h-full max-w-[200px] max-h-[150px]">
        <img class="w-full h-full object-contain" src="https://www.fuerteventura2000.com/images/ue_color-removebg-preview.png" alt="Logo UE Color">
      </div>
    </div>
  </div>

  <div>
    <template v-if="filteredCards.length > 0">
      <AppCard 
        v-for="(data, index) in filteredCards" 
        :key="index" 
        :title="data.title" 
        :subtitle="data.subtitle" 
        :content="data.content"
        :is-favorite="data.isFavorite"
        @update-favorite="updateFavoriteStatus(index, $event)"
      ></AppCard>
    </template>
    <p v-else class="text-center text-gray-500 my-10 text-lg">No hay cartas en favoritos</p>
  </div>
</template>
