<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import ListPost from '../components/ListPost.vue';
import Breadcrumbs from '../components/BreadcrumbsVue.vue';
import {useRouter} from 'vue-router';

const itemBreadcrumbs = [{
    name: 'Главная',
    url: '/'
}, {
    name: 'Список постов',
    url: '/list-posts'
},
];

const router = useRouter();
const postAll = reactive({data: []});
const loadingPost = ref(false);

onMounted(() => {
  getPosts();
})

const getPosts = async() =>{
  try {
    let postAlls = await fetch('https://jsonplaceholder.typicode.com/posts');
    postAll.data = await postAlls.json();
    loadingPost.value = true;
    } catch (error) {
      console.log(error)
  }
}
  
const deletePost = (post_id: number):void => {
  postAll.data = postAll.data.filter((item: { id: number; }) => item?.id !== post_id)
}

const toPost = (post_id: number):void  => {
  router.push({name: `post`, params: {id: post_id}})
}
</script>

<template>
<main class="wrapper-main">
  <Breadcrumbs :items="itemBreadcrumbs" />
  <div v-if="loadingPost" class="list_wrapper" >
    <h1 class="list_name">Cписок постов</h1>
    <ListPost 
    :list-posts="postAll.data"
    @to-post = "toPost" 
    @delete-post = "deletePost"
    />
  </div>
  <div v-else>
    ЗАГРУЗКА...
  </div>
</main>
</template>

<style lang="scss" scoped>
.wrapper-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list_wrapper{
  width: 70%;
  margin: auto;
    .list_name{
    display: flex;
    justify-content: center;
    }
  }
}
</style>
