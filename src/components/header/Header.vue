<template>
  <div class="navbar">
    <button class="nav-item">
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="black" fill-opacity="0.54"/>
      </svg>
    </button>

    <button class="nav-item">
      <img src="~@/assets/images/plus-plan.png">
      <span>Запланировать</span>
    </button>

  </div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style lang="sass">
.navbar
  display: flex
  justify-content: space-between
  align-items: center
  margin: 25px 44px 0 25px
  .nav-item
    display: flex
    justify-content: center
    align-items: center
    background-color: transparent
    border: none
    padding: 0
    color: #1071FF
    cursor: pointer
    span
      margin-left: 11px
      font-weight: 600
      font-size: 12px
      line-height: 16px

</style>
