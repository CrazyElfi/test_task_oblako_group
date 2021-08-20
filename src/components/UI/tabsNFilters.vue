<template>
  <div class="wrapper">
    <!--    tabs-->
    <div class="tabs-wrapper">
      <button class="tab-link active-tab">Групповое</button>
      <button class="tab-link">Индивидуальное</button>
    </div>

    <div class="filters-wrapper">
      <div class="filters_title">
        <div class="filters_title-item">Программа</div>
        <div class="filters_title-item">Период</div>
        <div class="filters_title-item">Статус</div>
      </div>
      <div class="filters">
        <input class="search" type="text" placeholder="Поиск">

        <select class="selected selectedPrograms">
          <option value="">Все</option>
          <option>А</option>
          <option>Б</option>
          <option>В</option>
        </select>

        <select class="selected selectedPeriod">
          <option value="">Все</option>
          <option v-for="period of periods"
                  :key="period.id">
            {{ period.title }}
          </option>
        </select>

        <select class="selected selectedStatus">
          <option value="">Все</option>
          <option>Действующие</option>
          <option>Недействующие</option>
        </select>
<!--        3-->
      </div>
      <div class="filters-setting">
        <div class="setting-item">34 сессии</div>
        <div class="setting-item active">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 10.75V12.25H4.75V10.75H0.25ZM0.25 1.75V3.25H7.75V1.75H0.25ZM7.75 13.75V12.25H13.75V10.75H7.75V9.25H6.25V13.75H7.75ZM3.25 4.75V6.25H0.25V7.75H3.25V9.25H4.75V4.75H3.25ZM13.75 7.75V6.25H6.25V7.75H13.75ZM9.25 4.75H10.75V3.25H13.75V1.75H10.75V0.25H9.25V4.75Z" fill="#1071FF"/>
          </svg>
          Настроить фильтр
        </div>
        <div class="setting-item">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 1.5575L8.4425 0.5L5 3.9425L1.5575 0.5L0.5 1.5575L3.9425 5L0.5 8.4425L1.5575 9.5L5 6.0575L8.4425 9.5L9.5 8.4425L6.0575 5L9.5 1.5575Z" fill="black" fill-opacity="0.54"/>
          </svg>
          Сбросить
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsNFilters',
  data () {
    return {
      periods: [
        { id: 1, title:'Июнь 2019' },
        { id: 2, title:'Июнь 2020' },
        { id: 3, title:'Июнь 2021' },
      ]
    }
  }
}
</script>

<style lang="sass">
.wrapper
  margin-bottom: 60px

.tabs-wrapper
  display: flex
  justify-content: flex-start
  align-items: center
  margin-bottom: 66px
  .tab-link
    background-color: transparent
    min-width: 68px
    height: 36px
    border: none
    margin-right: 24px
  .active-tab
    border-bottom: 1px solid #1071FF

.filters
  display: flex
  justify-content: flex-start
  align-items: center
  margin-bottom: 25px

.filters_title
  width: 100%
  display: flex
  justify-content: flex-start
  font-weight: 500
  font-size: 10px
  line-height: 12px
  color: rgba(0, 0, 0, 0.54)
  &-item
    width: 166px
    margin-left: 30px
    &:first-child
      margin-left: 196px

.selected
  color: rgba(0, 0, 0, 0.87)
  width: 166px
  height: 30px
  margin-left: 30px
  background: transparent
  border: none
  border-bottom: 1px solid rgba(0, 0, 0, 0.08)
  outline: none
  //option
  //  background: #cecece

.search
  //width: 166px
  width: 136px
  height: 30px
  background: url("~@/assets/images/search.png") no-repeat scroll 7px 7px
  padding-left: 30px
  border: none
  border-bottom: 1px solid rgba(0, 0, 0, 0.08)

.filters-setting
  display: flex
  justify-content: flex-start
.setting-item
  width: 180px
  height: 35px
  display: flex
  justify-content: flex-start
  align-items: center
  font-weight: 600
  font-size: 12px
  line-height: 16px
  svg
    margin-right: 10px
    path
      fill: rgba(0, 0, 0, 0.54)

.setting-item.active
  color: #1071FF
  svg path
    fill: #1071FF
</style>
