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

    <vs-card style="max-width:550px">
        <vs-alert class="vs-alert text-align-left" :active="active" closable close-icon="bxs-chat" title="Vuesax Alert Icon" style="width:100%;">
            Vuesax (pronounced / vjusacksː /, as view sacks) is a UI components framework created with Vuejs to make projects easily and with a Unique and pleasant style, Vuesax is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user
        </vs-alert>
        <button @click="active = !active" style="border:1px solid black;">{{active ? '비' : ''}}활성화 하기</button>
        <p>1. vs-alert의 높은 패딩값을 없애고 좌측 둥근테두리를 없앴다.</p>
        <p>2. vuesax4의 디자인을 따라해 after를 추가했다. (좌측 진한 경계선)</p>
        <p>3. vs-alert에 text-align 클래스를 넣을시 텍스트 좌측정렬되게 커스텀함</p>
        <p>4. clasable 디자인은 .con-x의 background를 none, color를 primary 색으로 커스텀함 | cloasble 기능은 어떻게 사용하는지 모르겠다 | 그냥 단순 아이콘기능으로 사용할 생각</p>
        <p>5. .vs-alert.con-icon의 padding-left을 0으로 커스텀함 / 하지만 아이콘을 쓸 일이 없을듯</p>
    </vs-card>
</template>

<style scoped>
button {
    margin-top:10px;
}
.vs-card--content > p {
    margin-top:10px;
}
</style>

<style>

</style>