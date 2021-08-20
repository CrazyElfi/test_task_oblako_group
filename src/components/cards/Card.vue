<template>
  <div class="card">
    <div class="card-date">{{ card.date }}</div>
    <div class="card-title">{{ card.title }}</div>
    <div class="card-numbOfParticipant">{{ card.numbOfParticipant }}</div>
    <div class="card-coach">{{ card.coach }}</div>
    <div class="card-percentageOfProgress">
      <!--      <img src="./assets/images/progress.svg">-->
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.73357 2.91153C0.855973 4.04045 0.333374 5.45903 0.333374 6.99967C0.333374 7.30734 0.354216 7.61014 0.394564 7.90674L2.02194 7.47068C2.00745 7.31563 2.00004 7.15851 2.00004 6.99967C2.00004 5.91977 2.3424 4.91982 2.92449 4.10245L1.73357 2.91153ZM2.9121 1.73304L4.10303 2.92397C4.70545 2.495 5.40704 2.19625 6.16671 2.0688V0.384583C4.94949 0.536367 3.83419 1.01629 2.9121 1.73304ZM6.16671 13.6148C3.73967 13.3121 1.71778 11.7048 0.824962 9.51687L2.4524 9.0808C3.13089 10.561 4.5108 11.6527 6.16671 11.9305V13.6148ZM7.83337 11.9305C10.1981 11.5338 12 9.47717 12 6.99967C12 4.52217 10.1981 2.46553 7.83337 2.0688V0.384583C11.122 0.794665 13.6667 3.59999 13.6667 6.99967C13.6667 10.3994 11.122 13.2047 7.83337 13.6148V11.9305Z"
              fill="black" fill-opacity="0.38"/>
      </svg>

      {{ card.percentageOfProgress }} %
    </div>
    <div class="card-button">
      <button
          @click="takeInfo">
        <svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.99996 3.33335C2.73329 3.33335 3.33329 2.73335 3.33329 2.00002C3.33329 1.26669 2.73329 0.666687 1.99996 0.666687C1.26663 0.666687 0.666626 1.26669 0.666626 2.00002C0.666626 2.73335 1.26663 3.33335 1.99996 3.33335ZM1.99996 4.66669C1.26663 4.66669 0.666626 5.26669 0.666626 6.00002C0.666626 6.73335 1.26663 7.33335 1.99996 7.33335C2.73329 7.33335 3.33329 6.73335 3.33329 6.00002C3.33329 5.26669 2.73329 4.66669 1.99996 4.66669ZM1.99996 8.66669C1.26663 8.66669 0.666626 9.26669 0.666626 10C0.666626 10.7334 1.26663 11.3334 1.99996 11.3334C2.73329 11.3334 3.33329 10.7334 3.33329 10C3.33329 9.26669 2.73329 8.66669 1.99996 8.66669Z"
                fill="black" fill-opacity="0.54"/>
        </svg>
      </button>

    </div>

    <modal
        title="First modal"
        v-show="modalFirst"
        :card = "card"
        @close="modalFirst = false">
      <div slot="body"
           class="body-wrapper">
        <div class="header">
          Планирование
          <div class="btns-wrapper">
            <button class="header-btn">
              <img src="~@/assets/images/done.png">
            </button>
            <button
                class="header-btn"
                @click="modalFirst = false">
              <img src="~@/assets/images/delete-icon.svg">
            </button>
          </div>

        </div>
        <div class="tabs-wrapper">
          <button class="tab-link active-tab">Основное</button>
          <button class="tab-link">Участники</button>
        </div>
        <div class="inputs-wrapper">
          <div class="row-inputs">
            <label>Программа</label>
            <select class="selected selectedPrograms">
<!--              <option value="">Все</option>-->
              <option>Страхование с заботой о клиенте</option>
              <option>Б</option>
              <option>В</option>
            </select>
          </div>
          <h3 class="sub-title">Мероприятие, дата и время проведения</h3>
          <div class="row-inputs">
            <label>Мероприятие</label>
            <input class="input-text" type="text" placeholder="Главные правила продаж  Тренинг">
          </div>
          <div class="row-inputs">
            <div class="row_title">
              <div class="row_title-item">Дата</div>
              <div class="row_title-item">Время</div>
              <div class="row_title-item">Тренер</div>
            </div>
            <div class="row-inner">
              <input type="date">
              <input type="time">
              <select class="selected selectedCouch">
                <!--              <option value="">Все</option>-->
                <option>Сергей Ефремов</option>
                <option>Ефремов Сергей</option>
                <option>Сергей Ефремов</option>
              </select>
            </div>
          </div>

          <div class="row-inputs">
            <label>Мероприятие</label>
            <input class="input-text" type="text" placeholder="Страхование без потерь  Тренинг">
          </div>

<!--            <InputsBlock-->
<!--              :card = "card"/>-->

        </div>
        <div class="radiobuttons-wrapper">
          <h3 class="sub-title">Условия записи по коду</h3>
          <RadioButtons :labels="labels"/>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/modal/Modal.vue'
import Api from  "@/services/api"
// import InputsBlock from '@/components/UI/InputsBlock.vue'
import RadioButtons from '@/components/UI/RadioButtons.vue'

export default {
  name: 'card',
  components: {
    modal,
    // InputsBlock,
    RadioButtons
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      modalFirst: false,
      labels: [
        {id: 'label1', name: 'Не использовать код доступа'},
        {id: 'label2', name: 'Требовать регистрацию'},
        {id: 'label3', name: 'Запросить только имя и фамилию'},
        {id: 'label4', name: 'Не требовать регистрацию, имя и фамилию'}
      ]
    }
  },
  methods: {
    takeInfo () {
      // this.modalFirst = !this.modalFirst
      const meetings = Api.getMeetings(this.card.id)
      console.log('meetings', meetings)
      console.log('test id', this.card.id)

    }
  },
  mounted () {
    // console.log('test', this.card)
  },
}
</script>

<style lang="sass" >
.card
  width: 100%
  //padding: 6px 8px
  height: 44px
  border: 1px solid #ccc
  font-style: normal
  font-weight: 500
  font-size: 12px
  line-height: 16px
  display: flex
  justify-content: space-between
  align-items: center
  color: rgba(0, 0, 0, 0.87)
  position: relative

  &-date
    min-width: 90px

  &-title
    min-width: 546px
    max-width: 100%
    text-align: start

  &-numbOfParticipant
    min-width: 104px

  &-coach
    min-width: 100px

  &-percentageOfProgress
    min-width: 87px
    display: flex
    justify-content: center
    align-items: center

    svg
      width: 13px
      height: 13px
      margin-right: 13px

  &-button
    min-width: 50px

    button
      width: 32px
      height: 32px
      border: none
      background: rgba(0, 0, 0, 0.08)
      border-radius: 40px
      display: none
      justify-content: center
      align-items: center


.card:hover
  background: rgba(0, 0, 0, 0.1)
  border-radius: 4px

.card:hover .card-button button
  display: flex

.body-wrapper
  display: flex
  flex-direction: column
  justify-content: flex-start
  text-align: start
  background-color: #FFFFFF
  position: fixed
  top: 0
  right: 0
  bottom: 0
  width: 65%
  height: 100%
  z-index: 99
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.08)
  padding: 24px

.header
  display: flex
  justify-content: space-between
  align-items: center
  font-weight: bold
  font-size: 18px
  line-height: 24px
  color: rgba(0, 0, 0, 0.87)
  margin-bottom: 30px
  .btns-wrapper
    .header-btn
      background: transparent
      border: none
      margin-right: 5px
      height: 24px
      width: 24px
      padding: 6px
      //img
      //  width: 13px

.sub-title
  font-weight: bold
  font-size: 14px
  margin-top: 50px
  margin-bottom: 20px
  line-height: 18px
  color: rgba(0, 0, 0, 0.87)
  width: 100%

.inputs-wrapper
  display: flex
  flex-direction: column
  width: 100%
.row-inputs
  width: 100%
  display: flex
  flex-direction: column
  margin-bottom: 34px
  label
    width: 100%
    font-weight: 500
    font-size: 10px
    line-height: 12px
    color: rgba(0, 0, 0, 0.54)
  .selected
    width: 100%
    margin-left: 0

  .input-text
    height: 30px
    border: none
    border-bottom: 1px solid rgba(0, 0, 0, 0.08)
  .row_title
    width: 100%
    display: flex
    justify-content: flex-end
    font-weight: 500
    font-size: 10px
    line-height: 12px
    color: rgba(0, 0, 0, 0.54)
    margin-bottom: 5px
    &-item
      width: 246px
      margin-left: 30px
  .row-inner
    width: 100%
    display: flex
    justify-content: flex-end
    input
      width: 246px
      margin-left: 30px
      background: transparent
      border: none
      border-bottom: 1px solid rgba(0, 0, 0, 0.08)
      outline: none
      color: rgba(0, 0, 0, 0.87)
      font-weight: 500
      font-size: 12px
      line-height: 16px
      font-family: Montserrat sans-serif
      font-style: normal
    .selected
      width: 246px
      margin-left: 30px

</style>




