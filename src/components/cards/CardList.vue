<template>
  <div class="cards-wrapper">
    <div class="cards-header">
      <div class="card-date">Дата начала</div>
      <div class="card-title">Название</div>
      <div class="card-numbOfParticipant">Участников</div>
      <div class="card-coach">Тренер</div>
      <div class="card-percentageOfProgress">
        Прогресс
      </div>
      <div class="card-button"></div>
    </div>
    <Card v-for="card in cards"
          :key="card.id"
          :card="card"/>
  </div>
</template>

<script>
import Card from '@/components/cards/Card'
import Api from  "@/services/api"

export default {
  name: 'CardList',
  components: {
    Card,
  },
  data () {
    return {
      cards: []
    }
  },
  mounted () {
    this.cards = Api.getPrograms()
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
