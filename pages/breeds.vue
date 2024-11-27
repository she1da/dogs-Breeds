<script>
import { fetchBreeds } from '~/services/api'

export default {
  async asyncData() {
    const breeds = await fetchBreeds()
    return { breeds }
  },
}
</script>

<template>
  <div>
    <h1>List of Dog Breeds</h1>
    <ul>
      <li v-for="(subBreeds, breed) in breeds" :key="breed">
        {{ breed }}
        <ul>
          <li v-for="subBreed in subBreeds" :key="subBreed">
            - {{ subBreed }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
