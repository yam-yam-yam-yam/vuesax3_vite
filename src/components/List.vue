<script setup>
import * as Vue from 'vue'
</script>

<template>
    <vs-card>
        <vs-list>
            <vs-list-item title="One text"></vs-list-item>
            <vs-list-item title="Another text" subtitle="A little text">텍스트</vs-list-item>
            <vs-list-item title="Some more text"></vs-list-item>
            <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
        </vs-list>
        <p>default vs-list</p>
        <p>title, subtitle의 옵션이 있으며 vs-list-item태그안의 내용은 우측에 위치하게된다.</p>
    </vs-card>

    <vs-card>
        <vs-list color="primary">
            <vs-list-header title="Group 1"></vs-list-header>
            <vs-list-item title="One text"></vs-list-item>
            <vs-list-item title="Another text" subtitle="A little text"><vs-button color="danger" type="gradient">One action</vs-button></vs-list-item>
            <vs-list-header title="Group 2"></vs-list-header>
            <vs-list-item title="Some more text"></vs-list-item>
            <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
        </vs-list>
        <p>color 옵션이 있으며 vs-list-header태그의 색상을 정한다.</p>
    </vs-card>

    <vs-card>
        <vs-list color="primary">
            <vs-list-header title="Group 1"></vs-list-header>
            <vs-list-item title="사용자1">
                <template v-slot:avatar>
                    <vs-avatar vs-text="Vuesax"/>
                </template>
            </vs-list-item>
            <vs-list-item title="사용자2">
                <template v-slot:avatar>
                    <vs-avatar vs-text="Vuesax"/>
                </template>
                사용불가
            </vs-list-item>
        </vs-list>
        <p>avatar 슬롯으로 list-item을 꾸며줄 수 있다.</p>
    </vs-card>
</template>

<style>

</style>