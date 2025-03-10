<template>
  <div class="container">
    <!-- 第一個拖曳列表 -->
    <div class="list">
      <h3>List A</h3>
      <DraggableList v-model:list="listA" group="shared">
        <div v-for="item in listA" :key="item" class="item">{{ item }}</div>
      </DraggableList>
    </div>

    <!-- 第二個拖曳列表 -->
    <div class="list">
      <h3>List B</h3>
      <DraggableList v-model:list="listB" group="shared">
        <div v-for="item in listB" :key="item" class="item">{{ item }}</div>
      </DraggableList>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableList from "@my-vue/my-component";

const listA = ref(['A1', 'A2', 'A3'])
const listB = ref(['B1', 'B2', 'B3'])
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

.list {
  width: 200px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
}

.item {
  padding: 10px;
  margin: 5px 0;
  background: white;
  border: 1px solid #ddd;
  cursor: grab;
  text-align: center;
}
</style>
