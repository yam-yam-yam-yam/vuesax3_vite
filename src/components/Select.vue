<script setup>
import {reactive, ref,shallowRef, toRefs} from 'vue'
</script>

<script>
    export default {
        data() {
            return {
                options1: [
                    {label:'apple',value:1},
                    {label:'banana',value:2},
                    {label:'orange',value:3}
                ],
                value1: 1,
                options2: [
                    {label:'apple',value:1},
                    {label:'banana',value:2},
                    {label:'orange',value:3}
                ],
                value2: 1,
                options3: [
                    {label:'apple',value:1},
                    {label:'banana',value:2},
                    {label:'orange',value:3}
                ],
                value3: [1]
            }
        },
        methods: {
            abc(e) {
                alert(5);
                alert(e);
            }
        },
    }
</script>

<template>
    <vs-card>
        <vs-select v-model="value1"  label="select">
            <vs-select-item v-for="(item,i) in options1" :key="`1_${item}_${i}`" :modelValue="item.value" :text="item.label"></vs-select-item>
        </vs-select>
        <p>default</p>
        <p>vs-select 태그안에 vs-select-item태그를 v-for로 생성하여 옵션들을 준다.</p>
        <p>select자체의 label은 label, 옵션들의 label은 text 로 옵션명이 있음</p>
    </vs-card>

    <vs-card>
        <vs-select v-model="value2" label="select" autocomplete>
            <vs-select-item v-for="(item,i) in options2" :key="`2_${item}_${i}`" :modelValue="item.value" :text="item.label"></vs-select-item>
        </vs-select>
        {{value2}}
        <p>autocomplete</p>
    </vs-card>

    <vs-card>
        <vs-select v-model="value3" label="select" multiple @input-changed="(e)=>{abc();}">
            <vs-select-item v-for="(item,i) in options3" :key="`3_${item}_${i}`" :modelValue="item.value" :text="item.label"></vs-select-item>
        </vs-select>
        {{value2}}
        <p>multiple</p>
        <p>value는 array 형식으로 존재해야 함</p>
    </vs-card>
</template>