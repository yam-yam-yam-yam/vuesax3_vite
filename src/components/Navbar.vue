<script setup>
import * as Vue from 'vue'

const nav = Vue.ref(0);
</script>

<template>
    <vs-card>
        <vs-navbar v-model="a">
            <template v-slot:title>
                <vs-navbar-title>
                Hello world
                </vs-navbar-title>
            </template>

            <vs-navbar-item>
                <a href="#">Home</a>
            </vs-navbar-item>
            <vs-navbar-item>
                <a href="#">News</a>
            </vs-navbar-item>
            <vs-navbar-item>
                <a href="#">Update</a>
            </vs-navbar-item>
        </vs-navbar>
        <p>기본 navbar</p>
        <p>1. title slot으로 좌측에 제목을 붙일 수 있다.</p>
        <p>2. vs-navbar-item 태그로 메뉴들을 추가할 수 있다.</p>
    </vs-card>

    <vs-card>
        <vs-navbar color="#aaaa51" v-model="nav" active-text-color="rgba(255,255,255,1)">
            <template v-slot:title>
                <vs-navbar-title>
                Hello world
                </vs-navbar-title>
            </template>

            <vs-navbar-item index="0">
                <a href="#">Home</a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <a href="#">News</a>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <a href="#">Update</a>
            </vs-navbar-item>
        </vs-navbar>
        <p>color와 text-color 옵션을 줄 수 있다.</p>
        <p>근데 text-color옵션은 안먹힘 ㅋ</p>
        <p>그래서 어쩔 수 없이 active-text-color를 줬음</p>
    </vs-card>
    
    <vs-card>
        <vs-navbar color="#aaaa51" v-model="nav" active-text-color="rgba(255,255,255,1)" collapse>
            <template v-slot:title>
                <vs-navbar-title>
                Hello world
                </vs-navbar-title>
            </template>

            <vs-navbar-item index="0">
                <a href="#">Home</a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <a href="#">News</a>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <a href="#">Update</a>
            </vs-navbar-item>
        </vs-navbar>
        <p>collapse 옵션을 줄 수 있음</p>
        <p>이거도 이쁘진 않은듯</p>
    </vs-card>
</template>