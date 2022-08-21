<script setup>
import * as Vue from 'vue'
// import { ref } from 'vue'

const a = Vue.ref("");
</script>

<template>
    <vs-card>
        <vs-input placeholder="default" v-model="a"></vs-input>
        <p>default임</p>
        <p>vuesax4 대로 배경색등 디자인을 수정함</p>
    </vs-card>
    <vs-card>
        <vs-input label-placeholder="default" v-model="a"></vs-input>
        <p>plabeholder대신 label-placeholder옵션을 사용하면 인풋 클릭시 라벨이 올라간다.</p>
        <p>ex) label-placeholder="default"</p>
    </vs-card>
    <vs-card>
        <vs-input label="label" v-model="a"></vs-input>
        <p>그냥 label="label"으로 사용도 가능하다.</p>
    </vs-card>
    <vs-card>
        <vs-input icon="search" label="Search" v-model="a"></vs-input>
        <vs-input icon-after="true" label="icon-after" icon="search" v-model="a"></vs-input>
        <vs-input icon="search" label="Search" icon-no-border v-model="a"></vs-input>
        <p>아이콘 사용 예시</p>
        <p>기본값 : icon="search"</p>
        <p>우측 아이콘 : icon-after="true" icon="search"</p>
        <p>아이콘 테두리 없애기 : icon-no-border</p>
    </vs-card>
    <vs-card>
        <vs-input icon="search" label="Search" :success="true" success-text="The mail is valid" color="green" val-icon-success="search" v-model="a"></vs-input>
        <vs-input icon="search" label="Search" description-text="설명" v-model="a"></vs-input>
        <p>validation</p>
        <p>success / danger / warning 을 boolean값으로 줄 수 있고</p>
        <p>success-text 와 같이 해당 타입때의 text를 하단에 추가한다.</p>
        <p>description-text="" 옵션으로 위 타입을 주지 않고 설명을 추가 할 수 있다.</p>
    </vs-card>
    <vs-card>
        <vs-input icon="search" label="Search" v-model="a" size="large"></vs-input>
        <vs-input icon="search" label="Search" v-model="a" size="small"></vs-input>
        <p>크기조정</p>
        <p>보통 icon들이 크기가 다들 이상함 / 커스텀기능을 없애도 이상</p>
    </vs-card>
</template>

<style>

</style>