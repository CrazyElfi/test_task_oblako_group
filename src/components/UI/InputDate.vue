<template>
  <!--  <div>-->
  <!--    https://codepen.io/pen/?editors=1010-->
  <!--    https://codepen.io/pen/?&editors=101-->

  <v-col
      cols="12"
      sm="3"
  >
    <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        locale="ru"
    >
      <!--            width="290"-->
      <template v-slot:activator="{ on }">
        <v-text-field
            label="Дата"
            prepend-icon="mdi-calendar"
            :value="computedDateFormattedMomentjs"
            clearable
            readonly
            v-on="on"
            locale="ru"
        ></v-text-field>
      </template>
      <v-date-picker
          locale="ru"
          v-model="date"
          @change="menu1 = false"
      ></v-date-picker>
    </v-menu>
  </v-col>
</template>

<script>
import moment from 'moment'

export default {
  name: 'InputDate',
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
    }
  },
  mounted () {
    moment.locale('nl')
    this.changeLocale()
    // console.log(moment.locale())
    // console.log(moment())

  },
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'ru'
    },
  },
  computed: {
    computedDateFormattedMomentjs () {
      moment.locale('nl')
      return this.date ? moment(this.date).format('D MMMM') : ''
    },
  },
}
</script>

<style lang="sass" scoped>

</style>
