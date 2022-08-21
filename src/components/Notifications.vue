<script setup>
import * as Vue from 'vue'
</script>

<template>
    <vs-card>
        <vs-button @click="$vs.notify({title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',color:'primary',time:40000,fixed:true})" color="primary" type="flat">Notification Primary</vs-button>
        <vs-button @click="$vs.notify({title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',color:'success'})" color="success" type="flat">Notification Success</vs-button>
        <vs-button @click="$vs.notify({title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',color:'danger'})" color="danger" type="flat">Notification Danger</vs-button>
        <vs-button @click="$vs.notify({title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',color:'warning'})" color="warning" type="flat">Notification Warning</vs-button>
        <vs-button @click="$vs.notify({title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',color:'dark'})" color="dark" type="flat">Notification Dark</vs-button>
        <p>vs-notify는 vs의 메소드로 실행함</p>
        <p>ex) $vs.notify({title:'title',text:'text',color:'color',time:4000})</p>
    </vs-card>

    <vs-card>
        <vs-button @click="$vs.notify({position:'bottom-right',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'top-right',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'top-left',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'bottom-left',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'bottom-center',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'top-center',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <p>position 옵션으로 위치를 정할 수 있음</p>
    </vs-card>

    <vs-card>
        <vs-button @click="$vs.notify({position:'bottom-right',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'top-right',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'top-left',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'bottom-left',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'bottom-center',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({position:'top-center',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <p>position 옵션으로 위치를 정할 수 있음</p>
    </vs-card>

    <vs-card>
        <vs-button @click="$vs.notify({icon:'info',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x',time:40000,})" color="primary" type="border">Notification white</vs-button>
        <p>icon 옵션으로 icon추가가능</p>
    </vs-card>

    <vs-card>
        <vs-button @click="$vs.notify({icon:'info',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x'})" color="primary" type="border">Notification white</vs-button>
        <vs-button @click="$vs.notify({icon:'info',title:'문서 Vuesax 4.0+',text:'이 문서는 최신 버전의 vuesax(4.0 이상)를 참조합니다. 이전 버전의 문서를 보려면 여기 👉 Vuesax3.x', fixed:true})" color="primary" type="border">Notification white</vs-button>
        <p>fixed옵션에 ture를 주면 클릭전까지 알림이 사라지지 않음</p>
    </vs-card>
</template>