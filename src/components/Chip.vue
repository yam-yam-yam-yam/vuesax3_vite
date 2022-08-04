<script setup>
import { ref } from 'vue'
</script>

<template>
    <vs-card>
        <vs-chip>
            Basic Chip
        </vs-chip>
        <vs-chip>
            <vs-avatar text="LD"/>
            Avatar Text
        </vs-chip>
        <vs-chip>
            <vs-avatar />
            Avatar Icon
        </vs-chip>
        <vs-chip>
            <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>
            Avatar Image
        </vs-chip>
        <vs-chip>
            <vs-icon icon="mood"/>
            Icon
        </vs-chip>
        <vs-chip closable>
            Closable chip
        </vs-chip>
        <p>chip은 디자인이 나쁘지 않아 커스텀할게 없었음</p>
        <p>basic chip이 기본디자인이며</p>
        <p>avatar, icon등을 추가하여 꾸밀 수 있음</p>
        <p>closable옵션이 있으나 추가한다고 바로 삭제기능이 생기는것이 아니라 클릭이벤트를 직접만들어줘야한다;;</p>
        <p>closable은 굳이 쓰지 않을듯</p>    

    </vs-card>  

    <vs-card>
        <vs-chip color="red">
            Basic Chip
        </vs-chip>
        <vs-chip color="red">
            <vs-avatar text="LD"/>
            Avatar Text
        </vs-chip>
        <vs-chip color="red">
            <vs-avatar />
            Avatar Icon
        </vs-chip>
        <vs-chip color="red">
            <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>
            Avatar Image
        </vs-chip>
        <vs-chip color="red">
            <vs-icon icon="mood"/>
            Icon
        </vs-chip>
        <vs-chip color="red" closable>
            Closable chip
        </vs-chip>
        <vs-chip transparent color="success">
            transparent
        </vs-chip>
        <vs-chip color="success">
            not transparent
        </vs-chip>
        <p>color 지정 가능</p>
        <p>transparent옵션을 주어 스타일을 바꿀 수도 있다</p>
    </vs-card>  
</template>

<style>

</style>