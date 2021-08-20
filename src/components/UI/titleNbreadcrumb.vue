<template>
  <div class="wrapper">
    <div class="breadcrumb">
      Главная   —   Планирование
    </div>
    <h1>
      <img src="~@/assets/images/union.png">
      Планирование
    </h1>
  </div>

</template>

<script>
export default {
name: "titleNbreadcrumb"
}
</script>

<style lang="sass">
.wrapper
  //width: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start
  text-align: start
  min-width: 1162px
  margin: 22px auto 0
  font-weight: 500
  font-size: 12px
  line-height: 16px
  color: rgba(0, 0, 0, 0.54)
  h1
    display: flex
    align-items: center
    font-weight: bold
    font-size: 38px
    line-height: 40px
    color: rgba(0, 0, 0, 0.87)
    img
      margin-right: 18px

</style>
