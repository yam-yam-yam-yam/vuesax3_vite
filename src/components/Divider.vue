<script setup>
import { ref } from 'vue'
</script>

<template>
    <vs-card>
        <p>vs-divider</p>
        <vs-divider></vs-divider>
        <p>default</p>
    </vs-card>

    <vs-card>
        <p>vs-divider</p>
        <vs-divider>vs-divier</vs-divider>
        <p>vs-divider 태그 안에 텍스트를 작성해 입력가능</p>
    </vs-card>

    <vs-card>
        <p>vs-divider</p>
        <vs-divider position="left">vs-divier</vs-divider>
        <p>position="left,left-center,center,right-center,right"</p>
        <p>텍스트의 위치 선택 가능</p>
    </vs-card>

    <vs-card>
        <p>vs-divider</p>
        <vs-divider color="primary">vs-divier</vs-divider>
        <p>color 선택 가능</p>
    </vs-card>

    <vs-card>
        <p>vs-divider</p>
        <vs-divider background="primary">vs-divier</vs-divider>
        <p>background 선택 가능 | background="primary"</p>
    </vs-card>

    <vs-card>
        <p>vs-divider</p>
        <vs-divider icon="info"></vs-divider>
        <p>icon옵션으로 text대체 가능</p>
    </vs-card>

    <vs-card>
        <p>vs-divider</p>
        <vs-divider border-style="dotted" style="margin-bottom:10px">dotted</vs-divider>
        <vs-divider border-style="dashed" style="margin-bottom:10px">dashed</vs-divider>
        <vs-divider border-style="solid" style="margin-bottom:10px">solid</vs-divider>
        <p>border-style 선택 가능</p>
        <p>border-style="dotted"</p>
    </vs-card>
</template>

<style>

</style>