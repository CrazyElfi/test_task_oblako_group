<template>
<!--  <v-data-table-->
<!--      :headers="headers"-->
<!--      :items="cards"-->
<!--      class="elevation-1"-->
<!--  >-->
<!--    <template v-slot:header.name="{ header }">-->
<!--      {{ header.text.toUpperCase() }}-->
<!--    </template>-->


<!--    <template-->
<!--        v-slot:item.btn="{  }">-->
<!--      <v-btn-->
<!--          fab-->
<!--          color="rgba(0, 0, 0, 0.15)"-->
<!--          elevation="0"-->
<!--          rounded-->
<!--          x-small-->
<!--          @mouseover="selectItem(this)"-->
<!--          @mouseleave="unSelectItem(this)"-->
<!--      >-->
<!--        <v-icon>mdi-dots-vertical</v-icon>-->
<!--      </v-btn>-->
<!--    </template>-->
<!--  </v-data-table>-->


</template>

<script>
// import Card from '@/components/cards/Card'
import Api from '@/services/api'

export default {
  name: 'CardList',
  components: {
    // Card,
  },
  data () {
    return {
      hoverCard: false,
      selectedItem: false,
      headers: [],
      cards: [],
    }
  },
  mounted () {
    this.cards = Api.getPrograms().program
    this.headers = Api.getPrograms().headers

  },
  methods: {
    selectItem (data) {
      // this.selectedItem = true
      console.log('mouseover', data)
    },
    unSelectItem (data) {
      // this.selectedItem = false
      console.log('mouseleave', data)
    }
  }
}
</script>

<style lang="sass">
.cards-wrapper
  width: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start

.cards-header
  padding: 6px 8px
  height: 30px
  font-weight: 500
  font-size: 10px
  line-height: 12px
  color: rgba(0, 0, 0, 0.54)
  display: flex
  justify-content: space-between
  align-items: center
</style>
