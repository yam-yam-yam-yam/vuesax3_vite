<script setup>
import { ref } from 'vue'
</script>

<template>
    <vs-card>
        <vs-avatar />
        <vs-avatar text="Luis Daniel"/>
        <vs-avatar text="Luisd"/>
        <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
        <p>기본 아바타</p>
        <p>텍스트 적용법 | text="Luisd</p>
        <p>이미지 적용법 | src = "주소"</p>
        <p>border-radius를 25%로 커스텀함</p>
    </vs-card>

    <vs-card>
        <vs-avatar text="Luisd" size="small"/>
        <vs-avatar text="Luisd" />
        <vs-avatar text="Luisd" size="large"/>
        <vs-avatar text="Luisd" size="70px"/>
        <p>사이즈 적용</p>
        <p>순서대로 | size="small" | default | large | 70px</p>
    </vs-card>

    <vs-card>
        <vs-avatar text="Luisd" color="success"/>
        <vs-avatar text="Luisd" color="warning"/>
        <vs-avatar text="Luisd" color="danger"/>
        <vs-avatar text="Luisd" color="#ffffff" text-color="#26302a"/>
        <p>색상 적용</p>
        <p>순서대로 | color="success" | warning | danger | color="#ffffff" text-color="#26302a" </p>
    </vs-card>

    <vs-card>
        <vs-avatar text="Luisd" :badge="5"/>
        <p>배지 적용</p>
        <p>:badge="5"</p>
    </vs-card>

    <vs-card>
        <vs-avatar color="primary" icon="date_range" />
        <vs-avatar color="success" icon="whatshot" />
        <vs-avatar color="danger" icon="photo_camera" />
        <vs-avatar color="warning" icon="filter_vintage" />
        <p>아이콘 적용</p>
        <p>icon="date_range"</p>
    </vs-card>
</template>

<style scoped>
.vs-card--content > p {
    margin-top:10px;
}
</style>

<style>
.con-vs-avatar {
    border-radius: 25% !important;
}
.vs-avatar--count.badgeNumber {
    top: -35% !important;
    right: -20% !important;
}
</style>