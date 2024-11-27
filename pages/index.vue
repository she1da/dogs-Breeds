<template>
  <div>
    <Header />
    <main class="text-center p-8">
      <img src="/main-image.jpg" alt="Main Image" class="mx-auto mb-6" />
      <h1 class="text-4xl font-bold mb-2">Welcome to Dog World</h1>
      <p class="text-lg text-gray-600 mb-6">Discover all dog breeds in one place.</p>
      <NuxtLink to="/breeds" class="btn-primary">View All Breeds</NuxtLink>

      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-4">Featured Breeds</h2>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li v-for="(breed, index) in featuredBreeds" :key="index" class="bg-gray-100 p-4 rounded shadow">
            <p class="text-xl capitalize">{{ breed }}</p>
            <NuxtLink :to="`/breeds/${breed}`" class="btn-secondary mt-2">View Details</NuxtLink>
          </li>
        </ul>
        <NuxtLink to="/breeds" class="btn-primary mt-6">See the Full List</NuxtLink>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/CustomHeader.vue';
import Footer from '~/components/CustomFooter.vue';

export default {
  data() {
    return {
      featuredBreeds: ['bulldog', 'poodle', 'beagle', 'labrador', 'husky', 'chihuahua'],
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>
