<template>
  <v-app id="inspire">
<!--    <v-card>-->
    <Header />

<!--      <v-sheet-->
<!--          id="scrolling-techniques-7"-->
<!--          class="overflow-y-auto"-->
<!--      >-->
        <v-container fluid>
          <titleNbreadcrumb />

          <tabsNFilters />
          <CardList />
        </v-container>
<!--      </v-sheet>-->
<!--    <div class="container-custom">-->
<!--      -->
<!--    </div>-->
<!--    </v-card>-->
  </v-app>
</template>

<script>
import CardList from './components/cards/CardList.vue'
import Header from './components/header/Header.vue'
import titleNbreadcrumb from './components/UI/titleNbreadcrumb.vue'
import tabsNFilters from './components/UI/tabsNFilters.vue'
// import modal from './components/modal/Modal.vue'


import moment from 'moment';
require('moment/locale/ru')
moment.locale('nl')
export default {
  name: 'App',
  components: {
    Header,
    titleNbreadcrumb,
    tabsNFilters,
    CardList,
    // modal
  },
  data() {
    return {
      // modalFirst: false,
    }
  }
}
</script>


<style lang="sass">
#app
  font-family: Montserrat, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
/*margin-top: 60px;*/
//max-width: 1280px

.container-custom
  min-width: 1162px
  margin: 0 auto
  padding: 2px 59px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

</style>
