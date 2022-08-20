<script setup>
import { ref } from 'vue'

const data1 = ref(true);
const data2 = ref(undefined);
const data3 = ref([]);
</script>

<template>
    <vs-card>
        <vs-checkbox v-model="data1"></vs-checkbox>
        <p>v-model을 주어 작동</p>
        <p>아이콘의 높이가 체크박스 칸을 넘어가서 height를 기본값으로 커스텀함</p>
        <p>vuesax4와 같이 border-radius와 font-size를 커스텀함</p>
    </vs-card>

    <vs-card>
        <vs-checkbox v-model="data1" color="success"></vs-checkbox>
        <p>color적용 가능</p>
    </vs-card>

    <vs-card>
        <vs-checkbox v-model="data2" vs-value="사과">사과</vs-checkbox>
        <p>string값 checkbox</p>
        <p>{{`${data2}`}}</p>
    </vs-card>

    <vs-card>
        <vs-checkbox v-model="data3" vs-value="사과">사과</vs-checkbox>
        <vs-checkbox v-model="data3" vs-value="귤">귤</vs-checkbox>
        <p>string값 checkbox</p>
        <p>{{`${data3}`}}</p>
    </vs-card>

    <vs-card>
        <vs-checkbox v-model="data" icon="close"></vs-checkbox>
        <p>icon 설정 가능</p>
    </vs-card>
</template>

<style scoped>

</style>

<style>

</style>