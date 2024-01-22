
<script setup lang="ts">
defineProps<{
  items?: Breadcrumbs[]|never[];
}>()

interface Breadcrumbs {
    name: string|null,
    url: string, 
}
</script>

<template>
<nav v-if="items && items.length" class="breadcrumbs">
  <ol>
      <li v-for="(item, itemIndex) in items" :key="itemIndex">
        <router-link v-if="itemIndex !== items.length - 1"
            :to="item.url"
            :title="item.name"
            class="link"
            >
            {{ item.name }}
        </router-link>
        <span v-else>{{ item.name }}</span>
        <span v-if="items[itemIndex + 1]" class="separator">/</span>
      </li>
  </ol>
</nav>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  justify-content: center;
  border-radius: 4px;

  ol, ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 15px;
    li {
        color: #222222;
        .link {
            font-weight: 600;
            text-decoration: none;
            transition: all 0.5s ease;
            color: #222222;
            &:hover {
                color: blue;
                text-decoration: underline;
            }
        }
        .separator {
            color: hsla(0, 0%, 13%, 0.563);
            margin: 0.3rem;
        }
    }
}
}
</style>