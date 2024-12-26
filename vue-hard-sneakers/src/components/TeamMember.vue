<script setup>
let props = defineProps({
  name: String,
  about: String,
  imageUrl: String,
})
</script>

<template>
  <li class="st-4__item st4-member">
    <div class="st4-member__container">
      <img :src="imageUrl" loading="lazy"/>
    </div>
    <h3 class="st4-member__name h3">{{name}}</h3>
    <p class="st4-member__about">{{about}}</p>
  </li>
</template>