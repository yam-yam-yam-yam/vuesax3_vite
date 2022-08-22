<script setup>
import * as vue from 'vue';

const radioVal = vue.ref(1);
</script>

<template>
    <vs-card>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="12">
            <vs-radio v-model="radioVal" vs-name="radio1" vs-value="1">1</vs-radio>
            <vs-radio v-model="radioVal" vs-name="radio1" vs-value="2">2</vs-radio>
        </vs-col>
        {{radioVal}}
        <p>default</p>
        <p>radio는 안이뻐서 select를 애용할 듯</p>
    </vs-card>
    <vs-card>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="12">
            <vs-radio v-model="radioVal" vs-name="radio2" vs-value="1" color="red">1</vs-radio>
            <vs-radio v-model="radioVal" vs-name="radio2" vs-value="2" color="red">2</vs-radio>
        </vs-col>
        {{radioVal}}
        <p>color 옵션 지정 가능</p>
    </vs-card>
    <vs-card>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="12">
            <vs-radio v-model="radioVal" vs-name="radio3" vs-value="1" disabled>1</vs-radio>
            <vs-radio v-model="radioVal" vs-name="radio3" vs-value="2" disabled>2</vs-radio>
        </vs-col>
        {{radioVal}}
        <p>disabled 옵션 지정 가능</p>
    </vs-card>
</template>