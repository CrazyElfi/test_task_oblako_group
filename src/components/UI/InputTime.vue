<template>
<!--    <v-app id="inspire">-->
<!--      <v-row>-->
        <v-col
            cols="12"
            sm="3"
        >
          <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
          >
<!--            width="290px"-->
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="time"
                  label="Время"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
                v-if="menu2"
                v-model="time"
                full-width
                @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
<!--      </v-row>-->
<!--    </v-app>-->
</template>

<script>
export default {
  name: 'InputTime',
  data () {
    return {
      time: null,
      menu2: false,
    }
  }
}
</script>

<style scoped>

</style>
