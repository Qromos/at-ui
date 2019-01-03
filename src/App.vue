<template>
  <div id="app">
    <at-menu :fill="true">
      <at-menu-item icon="home" title="Home" to="/"/>
      <at-menu-item icon="book" title="Publicações" to="/posts">
        <at-menu-item title="Ver todas" to="/posts"/>
        <at-menu-item title="Adicionar publicação" to="/posts/create"/>
        <at-menu-item title="Categorias" to="/posts/categories"/>
      </at-menu-item>
      <at-menu-item icon="file" title="Páginas" to="/pages"/>
    </at-menu>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    //
  }
}
</script>

<style lang="scss">
@import '@qromos/at-ui-style';
</style>
