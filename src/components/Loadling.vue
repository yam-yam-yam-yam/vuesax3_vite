<script setup>
import { ref, onMounted } from 'vue'

let active = ref(false);
</script>

<script>
export default {
    methods: {
        openLoading(type) {
            this.active = true;
            console.log(type);
            this.$vs.loading({
                type:'point',
            })

            setTimeout( ()=> {
                this.active = false;
                this.$vs.loading.close();
            }, 3000);
        }
        
    },
}
</script>

<template>
    <vs-card>
        <vs-alert class="vs-alert">
            햄버거는 핫크리스피 햄버거
        </vs-alert>
        <button @click="openLoading('point')" style="border:1px solid black;">{{active ? '비' : ''}}활성화 하기</button>
        <p>기본 컴포넌트</p>
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

