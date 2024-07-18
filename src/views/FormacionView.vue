<script setup>
    import { ref, computed, defineProps } from 'vue';

    const props = defineProps({
    isSwitchOn: Boolean
    });

    const cursos = ref([
    {
        titulo: "Curso de Vue",
        descripcion: "Aprende los fundamentos de Vue y cómo crear aplicaciones web interactivas.",
        duracion: "4 semanas",
        inscripcionAbierta: true
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: false
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: false
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: true
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: true
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: false
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: true
    },
    {
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore distinctio eveniet minima, facere velit?",
        duracion: "6 segundos",
        inscripcionAbierta: false
    },
    ]);

    const filteredCursos = computed(() => {
    if (props.isSwitchOn) {
        return cursos.value.filter(curso => curso.inscripcionAbierta);
    }
    return cursos.value;
    });

    const inscribirCurso = (curso) => {
    alert(`Te has inscrito en el ${curso.titulo}`);
    };
</script>

<template>
  <div class="mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">Formación</h1>
    <p class="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptate!</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
      <div v-for="curso in filteredCursos" :key="curso.titulo" class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-2">{{ curso.titulo }}</h2>
        <p class="text-gray-700 mb-4">{{ curso.descripcion }}</p>
        <p class="text-gray-500 mb-4"><strong>Duración:</strong> {{ curso.duracion }}</p>
        <button
          :disabled="!curso.inscripcionAbierta"
          @click="inscribirCurso(curso)"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {{ curso.inscripcionAbierta ? 'Inscribirse' : 'Inscripción cerrada' }}
        </button>
      </div>
    </div>
  </div>
</template>

