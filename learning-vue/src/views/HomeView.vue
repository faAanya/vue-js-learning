<script setup>
import Hero  from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobsListings from '@/components/JobsListings.vue';
</script>

<template>
    <Hero title="Test Title" subTitle="Meow"/>
    <HomeCards/>
    <JobsListings :limit="5" :showButton="true"/>
</template>