<template>
  <header>
    <!-- Logo du site -->
    <a class="logo" href="index.html">
      <div class="nom">Laure Dinateur</div>
      <div class="metier">Graphiste</div>
    </a><nav><!-- Menu de navigation -->
    <ul>
      <li>
        <!-- Lien actif : On ajoute la classe .actif au lien
        représentant la page actuelle -->
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/infos">Qui suis-je ?</router-link>
      </li>
      <li>
        <router-link to="/contact">Me contacter</router-link>
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
