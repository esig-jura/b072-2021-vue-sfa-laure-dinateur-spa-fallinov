<template>
  <header>
    <!-- Logo du site -->
    <router-link class="logo" to="/">
      <div class="nom">Laure Dinateur</div>
      <div class="metier">Graphiste</div>
    </router-link><nav><!-- Menu de navigation -->
    <ul>
      <li>
        <!-- Lien actif : On ajoute la classe .actif au lien
        représentant la page actuelle -->
        <router-link to="/" exact-active-class="actif">Accueil</router-link>
      </li>
      <li>
        <router-link to="/infos" exact-active-class="actif">Qui suis-je ?</router-link>
      </li>
      <li>
        <router-link to="/contact" exact-active-class="actif">Me contacter</router-link>
      </li>
    </ul>
  </nav>
  </header>
</template>

<script>
export default {
  name: "EnteteDePage"
}
</script>

<style scoped>

</style>
