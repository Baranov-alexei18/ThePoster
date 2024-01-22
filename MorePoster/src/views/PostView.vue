<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import Breadcrumbs from '../components/BreadcrumbsVue.vue';
import {useRoute} from 'vue-router';

interface Post {
  data: {
    userId: number|null,
    id: number|null,
    title: string,
    body: string,  
  }
}
interface Author {
  data: {
    id: number|null,
    name: string|null,
    username: string|null,
    email: string|null,
    phone: string|null,
    website: string|undefined;
  }
}

const route = useRoute()

let postData: Post = reactive({data: {userId: null, id: null, title: "", body: ""}});
let authorData:Author  = reactive({data:{id: null, name: "", username: "", email: "", phone: "", website: ""}});
const itemBreadcrumbs = [
  {
    name: 'Главная',
    url: '/'
  }, 
  {
    name: 'Список постов',
    url: '/list-posts'
  },
  {
    name: `Пост № ${route.params.id}`,
    url: '/list-posts/post/:id'
  }
];

onMounted(() => {
  getPost();
})  

const getPost = async() =>{
  try {
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);  
    postData.data = await post.json();
    getAuthorInfo();
    } catch (error) {
      console.log(error)
  }
}
const getAuthorInfo = async() =>{
  try {
    let author = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.data.userId}`);
    authorData.data = await author.json();
    } catch (error) {
      console.log(error)
  }
}
const getNameAuthor = computed(():string|undefined => {
  return authorData.data.name +" "+ authorData.data.username
})

</script>

<template>
  <div>
    <Breadcrumbs :items="itemBreadcrumbs"/>
    <div class="post_wrapper">
      <h1 class="list_name">{{postData.data.title}}</h1>
      <p>{{ postData.data.body }}</p>
      <div class="author_wrapper">
        <h3>Об Авторе</h3>
        <p>Имя пользователя: {{ getNameAuthor }}</p>
        <p>Email: <a :href="`mailto:${authorData.data.email}`">{{ authorData.data.email }}</a></p>
        <p>Телефон: {{ authorData.data.phone }}</p>
        <p>Website: <a :href="authorData.data.website">{{ authorData.data.website }}</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post_wrapper{
  display: flex;
  flex-direction: column;
  width: 70%;
  height: max-content;
  background-color:  var(--vt-c-text-dark-2);
  border-radius: 20px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 5px;

  .list_name{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .author_wrapper {
    background-color:  rgb(193, 236, 255);
    border-radius: 16px;
    margin-top: 20px;
    padding: 8px;
  }
}
</style>
