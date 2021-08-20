<template>
  <!--  <v-app id="inspire">-->
  <!--    <v-container class="px-0" fluid>-->

  <!--      <v-radio-group v-model="radioGroup">-->
  <!--        <v-radio-->
  <!--            v-for="label in labels"-->
  <!--            :key="label.id"-->
  <!--            :label="label.name"-->
  <!--            :value="label.name"-->
  <!--        ></v-radio>-->
  <!--      </v-radio-group>-->

  <!--    </v-container>-->
  <!--  </v-app>-->
  <div>
    <div class="radiobutton-wrapper"
         v-for="label in labels"
         :key="label.id">
      <input type="radio"
             :value="label.name"
             id="label.id"
      >
      <label for="label.id">{{ label.name }}</label>
    </div>


  </div>
</template>

<script>

export default {
  name: 'RadioButtons',
  props: {
    labels: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      radioGroup: null,
    }
  },
}
</script>

<style lang="sass">
.radiobutton-wrapper
  display: flex
  justify-content: flex-start
  align-items: center
  margin-bottom: 10px
  input
    width: 20px
    height: 20px
  label
    margin-left: 10px
    font-weight: 500
    font-size: 12px
    line-height: 16px
</style>
