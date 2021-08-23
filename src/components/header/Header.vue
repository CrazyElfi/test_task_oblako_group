<template>
  <div>
    <v-app-bar
        color="white"
        flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn text x-small color="#1071FF">
        <v-icon left>mdi-plus</v-icon>
        Запланировать
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

