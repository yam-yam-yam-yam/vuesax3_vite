<script setup>
import { reactive } from 'vue'
</script>

<script>
export default {
    methods: {
        openLoading() {
            this.active = true;
            this.$vs.loading({
                container: this.$refs.loadableButton
            })

            setTimeout( ()=> {
                this.active = false;
                this.$vs.loading.close((this.$refs.loadableButton));
            }, 30000);
        }
        
    },
}
</script>

<template>
    <vs-card>
        <vs-alert class="vs-alert">
            햄버거는 핫크리스피 햄버거
        </vs-alert>
        <button @click="openLoading()" style="border:1px solid black;">활성화 하기</button>
        <div ref="loadableButton" style="width:500px; height:500px; background-color:#bbbbbb; position:relative">빈 박스</div>
    </vs-card>

    <vs-card>
        <p>loading을 구현하는데 매우짜증났음</p>
        <p>1. 첫번째 문제</p>
        <p>this.$vs.loading({container: this.$refs.loadableButton,})</p>
        <p>위와 같이 loading메소드에 obj 인자를 넣어 옵션을 추가해주는데,</p>
        <p>type옵션이 있음(모양을 정하는 옵션)</p>
        <p>이게 뭔짓을 해도 안먹혀서 그냥 css에 내가 원하는 타입의 css로 강제로 박아버렸다. (corners type)</p>
        <p>2. 두번째 문제</p>
        <p>vs-loading의 dom은 fixed style임</p>
        <p>그래서 container옵션을 주든 말든 그냥 화면 정중앙에 위치함</p>
        <p>이럴꺼면 왜 container옵션이 있는거죠?</p>
        <p>그래서 position을 absolute로 바꿔버렸다.</p>
    </vs-card>
</template>

<style>

</style>

