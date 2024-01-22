<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter();

function toListPost():void {
  router.push("/list-posts")
}
</script>

<template>
  <main>
    <div style="display: flex; justify-content: center">
      <button class="button-toggle" @click="toListPost">
        Переход на страницу списка постов
      </button>
    </div>
  </main>
</template>

<style lang="scss">
.button-toggle{
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: aquamarine;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
