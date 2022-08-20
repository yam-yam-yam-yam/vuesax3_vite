<script setup> 
import { ref } from 'vue'
</script>

<script setup> 

</script>

<template>
    <vs-card>
        <vs-button type="filled" style="margin-right:10px;">filled Button</vs-button>
        <vs-button type="border" style="margin-right:10px;">border Button</vs-button>
        <vs-button type="relief" style="margin-right:10px;">relief Button</vs-button>
        <p>버튼 타입1</p>
        <p>칠해진 버튼 | type="filled"</p>
        <p>외각선만 있는 버튼 | type="border"</p>
        <p>타격감 있는 버튼 | type="relief"</p>
        <p>vuesax4의 디자인처럼 border-radius를 12px로 늘려주었다.</p>
        <p>radius 옵션이 있긴한데 써보니..... 거의 마름모에 가깝게 둥글어짐</p>
    </vs-card>

    <vs-card>
        <vs-button type="filled" color="red" text-color="#ffffff">color custom</vs-button>
        <p>color="red" text-color="#ffffff"</p>
    </vs-card>

    <vs-card>
        <vs-button type="filled" size="large" style="margin-right:10px;">large button</vs-button>
        <vs-button type="filled" style="margin-right:10px;"> default button</vs-button>
        <vs-button type="filled" size="small" style="margin-right:10px;">small button</vs-button>
        <p>size="large"</p>
    </vs-card>

    <vs-card>
        <div style="display:flex;">
            <vs-button color="primary" type="border" icon="search" style="margin-right:10px;">메뉴</vs-button>
            <vs-button disabled color="primary" type="border" icon="search" style="margin-right:10px;"></vs-button>
            <vs-button color="warning" type="filled" icon="public" style="margin-right:10px;"></vs-button>
            <vs-button color="success" type="flat" icon="photo_camera" style="margin-right:10px;"></vs-button>
            <vs-button color="dark" type="line" icon="event_note" style="margin-right:10px;"></vs-button>
            <vs-button color="danger" type="gradient" icon="person_add" style="margin-right:10px;"></vs-button>
        </div>
        <p>button에 icon을 부여했을 시 문제점</p>
        <p>vs-button을 감싸고있는 dom에 다른 돔들이 없고,</p>
        <p>오로직 button들만 존재한다면 부모의 height가 자동으로 커지지않음</p>
        <p>그래서 button들이 상위 돔을 벗어나버림</p>
        <p>해결법은 상위 돔에 display를 부여해줌</p>
    </vs-card>

    <vs-card>
        <vs-button type="filled" to="/test" style="margin-right:10px;">to</vs-button>
        <vs-button type="filled" href="/test" style="margin-right:10px;">href</vs-button>
        <vs-button type="filled" target href="/test" >target href</vs-button>
        <p>vs-button의 route관련 기능들</p>
        <p>href는 웹페이지를 새로 로딩하게됨</p>
        <p>to는 vue의 route를 사용함</p>
    </vs-card>
</template>

<style>

</style>
