<script setup>
import { ref, onMounted, watch } from 'vue'
import Sortable from 'sortablejs'

// 接收 props，讓外部可以用 v-model 來管理 list
const props = defineProps({
  list: Array,
  group: String // 允許不同組之間拖動
})

// 發送更新事件，讓 v-model 可以雙向綁定
const emit = defineEmits(['update:list'])

// 取得 DOM 參考
const container = ref(null)

// 在 onMounted 時初始化 Sortable
onMounted(() => {
  new Sortable(container.value, {
    animation: 150,
    group: props.group || 'default', // 確保不同 draggable 可以互相拖曳
    onEnd(event) {
      const newList = [...props.list]
      const movedItem = newList.splice(event.oldIndex, 1)[0]
      newList.splice(event.newIndex, 0, movedItem)

      // 通知父元件更新 list
      emit('update:list', newList)
    }
  })
})
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>

