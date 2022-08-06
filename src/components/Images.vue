<script setup>
import * as Vue from 'vue'
</script>

<template>
    <vs-card>
        <vs-images>
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
        </vs-images>
        <p>image default</p>
    </vs-card>

    <vs-card>
        <vs-images>
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 4" />
        </vs-images>
        <vs-images hover="blur">
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 4" />
        </vs-images>
        <vs-images hover="zoom">
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 4" />
        </vs-images>
        <vs-images hover="dark">
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 4" />
        </vs-images>
        <vs-images hover="scale">
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 4" />
        </vs-images>
        <vs-images hover="curtain">
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 4" />
        </vs-images>
        <p>hover 효과</p>
        <p>위부터 순서대로 default | blur | zoom | dark | scale | curtain</p>
    </vs-card>

    <vs-card>
        <vs-images not-border-radius>
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9"/>
        </vs-images>
        <p>not-border-radius 옵션 사용 가능</p>
    </vs-card>

    <vs-card>
        <vs-images not-margin>
            <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9"/>
        </vs-images>
        <p>not-margin 옵션 사용 가능</p>
    </vs-card>

</template>

<style>

</style>