<script setup>
import * as vue from "vue";

const currentx = vue.reactive(1);
</script>

<template>
    <vs-card>
        <vs-pagination :total="20" v-model="currentx"></vs-pagination>
        <p>default</p>
        <p>total 옵션에 데이터 바인딩을 주어 총 페이지를 정할 수 있다.</p>
    </vs-card>
    <vs-card>
        <vs-pagination :total="20" v-model="currentx" goto></vs-pagination>
        <p>goto 옵션을 주어 페이지 이동이 가능한 input을 자동생성한다.</p>
    </vs-card>
    <vs-card>
        <vs-pagination :total="20" v-model="currentx" :color="'red'"></vs-pagination>
        <p>color 옵션 부여 가능</p>
    </vs-card>
    <vs-card>
        <vs-pagination :total="20" v-model="currentx" prev-icon="cloud" next-icon="circle"></vs-pagination>
        <p>prev-icon, next-icon 옵션 부여 가능</p>
    </vs-card>
</template>