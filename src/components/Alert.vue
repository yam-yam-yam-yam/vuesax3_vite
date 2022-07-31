<script setup>
import { ref } from 'vue'

const active = ref(true);
</script>

<template>
    <vs-card>
        <vs-alert class="vs-alert">
            햄버거는 핫크리스피 햄버거
        </vs-alert>
        <p>기본 컴포넌트</p>
    </vs-card>
    <vs-card>
        <vs-alert class="vs-alert" :active="active">
            햄버거는 핫크리스피 햄버거
        </vs-alert>
        <button @click="active = !active" style="border:1px solid black;">{{active ? '비' : ''}}활성화 하기</button>
        <p>:active="active" / 데이터 바인딩을 통해 돔을 활성화,비활성화 할 수 있다.</p>
    </vs-card>

    <vs-card>
        <vs-alert class="vs-alert" title="햄버거는">
            핫크리스피 햄버거
        </vs-alert>
        <p>title="햄버거는" / 타이틀을 넣을 수 있지만 못생겨서 굳이 넣지않을듯 or 커스텀해주거나</p>
    </vs-card>

    <vs-card>
        <vs-alert class="vs-alert" :active="active" closable :icon="'mood'" close-icon="cancel">
            <p>이곳에 쓰레기 무단투기 하다 적발시,</p>
            <p>욕이 배따고 들어가는걸 보여드립니다.</p>
        </vs-alert>
        <button @click="active = !active" style="border:1px solid black;">{{active ? '비' : ''}}활성화 하기</button>
        <p>1. 타이틀은 못생겼다.. 쓸일이 없을듯</p>
        <p>2. closable은 어떻게 사용하는지 모르겠다, 디자인도 이상해서 커스텀 해줘야함</p>
        <p>3. clasable 디자인은 .con-x의 background를 none, color를 primary 색으로 커스텀함</p>
        <p>4. .vs-alert의 padding을 0으로 커스텀함</p>
        <p>5. .vs-alert.con-icon의 padding-left을 0으로 커스텀함</p>
    </vs-card>
</template>

<style scoped>
/* 앞으로 사용할 커스텀 부분 */
.vs-alert {
  padding: 0% 0% !important;
}
.vs-alert.con-icon {
  padding-left: 0px !important;
}

/* 이 프로젝트의 css부분 */
button {
    margin-top:10px;
}
.vs-card--content > p {
    margin-top:10px;
}
</style>

<style>
/* 앞으로 사용할 커스텀 부분 */
.con-x {
    background: none !important;
    color: rgba(var(--vs-primary),1) !important;
}
</style>