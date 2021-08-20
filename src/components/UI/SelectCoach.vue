<template>
  <v-col
      cols="12"
      sm="3"
  >
    <v-select
        v-model="selectedCoach"
        :items="coaches"
        item-text="name"
        label="Тренер"
    ></v-select>

  </v-col>
</template>

<script>
export default {
  name: 'SelectCoach',
  data () {
    return {
      selectedCoach: null,
      coaches: [
        {id: 'coach1', name:'Сергей Ефремов' },
        {id: 'coach2', name:'Ергей Дремов' },
        {id: 'coach3', name:'Оргей Оремов' },
      ],
    }
  },
}
</script>

<style scoped>

</style>
