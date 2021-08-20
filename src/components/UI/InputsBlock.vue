<template>
  <v-app id="inspire">
    <v-container fluid>

      <v-row>
        <v-text-field
            label="Мероприятие"
            :rules="rules"
            hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row justify-sm="end">
        <InputDate/>
        <InputTime/>
        <SelectCoach/>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
import InputDate from '@/components/UI/InputDate.vue'
import InputTime from '@/components/UI/InputTime.vue'
import SelectCoach from '@/components/UI/SelectCoach.vue'

export default {
  name: 'InputsBlock',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    InputDate,
    InputTime,
    SelectCoach
  },
  data: () => ({
    rules: [
      value => !!value || 'Error message.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
  mounted () {
    console.log('this card', this.card)
  }
}
</script>

<style scoped>

</style>
