<script setup lang="ts" >

const props = defineProps<{
  listPosts?: [ListPost]|never[];
}>()
const emit = defineEmits(['deletePost','toPost'])

interface ListPost {
    userId: number,
    id: number,
    title: string,
    body: string,  
}

const deletePost = (id:number):void => {
  emit('deletePost', id)
}

const toPost = (id:number):void => {
  emit('toPost', id)
}
</script>

<template>
<div>
  <div 
    v-for="(item, idx) in props?.listPosts"
    :key="idx" class="list_post_wrapper" 
    @click="toPost(item.id)"
    @click.right.prevent = "deletePost(item.id)"
    >
    <div class="post_wrapper">
      <div>
        Title: {{item.title}}
      </div>
      <div>
        Content: {{item.body}}
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.list_post_wrapper{
  width: 100%;
  .post_wrapper{
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color:  var(--vt-c-text-dark-2);
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 10px;
}
}

</style>
