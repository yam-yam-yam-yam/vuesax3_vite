<script setup>
import { ref } from "vue";
const prompt1 = ref(false);
const prompt2 = ref(false);
const prompt3 = ref(false);
const prompt4 = ref(false);
</script>

<script>
export default {
    methods: {
        openAlert(color) {
            this.$vs.dialog({
                color,
                title:'Welcome to Vuesax',
                text:'text',
                accept:this.acceptAlert
            })
        },
        openAlert2(color) {
            this.$vs.dialog({
                type:'confirm',
                color,
                title:'Welcome to Vuesax',
                text:'text',
                accept:this.acceptAlert,
                cancel:this.cancelAlert
            })
        },
        acceptAlert(){
            alert('accept 실행');
        },
        cancelAlert(){
            alert('close 실행');
        }
    },
}
</script>


<template>
    <vs-card>
        <vs-button @click="openAlert('primary')" color="primary" style="margin-right:10px;">Alert Primary</vs-button>
        <vs-button @click="openAlert('success')" color="success" style="margin-right:10px;">Alert Success</vs-button>
        <vs-button @click="openAlert('danger')" color="danger" style="margin-right:10px;">Alert Danger</vs-button>
        <vs-button @click="openAlert('warning')" color="warning" style="margin-right:10px;">Alert Warning</vs-button>
        <vs-button @click="openAlert('dark')" color="dark">Alert Dark</vs-button>
        <p>기본적인 vs-alert</p>
        <p>vs-alert를 비롯한 몇몇 ui는 scirpt로 실행한다.</p>
        <p>this.$vs.dialog({}) 형식으로 실행하며</p>
        <p>위 예시는 title,text,color,accept 속성을 추가했다.</p>
        <p>accept속성에는 accept를 눌러서 확인했을시 실행하는 함수,또는 소스를 값으로 가진다.</p>
        <p>ex) {accept:this.acceptAlert}</p>
    </vs-card>

    <vs-card>
        <vs-button @click="openAlert2('primary')" color="primary" style="margin-right:10px;">Alert Primary</vs-button>
        <vs-button @click="openAlert2('success')" color="success" style="margin-right:10px;">Alert Success</vs-button>
        <vs-button @click="openAlert2('danger')" color="danger" style="margin-right:10px;">Alert Danger</vs-button>
        <vs-button @click="openAlert2('warning')" color="warning" style="margin-right:10px;">Alert Warning</vs-button>
        <vs-button @click="openAlert2('dark')" color="dark">Alert Dark</vs-button>
        <p>type에 confirm을 줄 경우 닫는 x버튼이 제외되고 cancel버튼이 생긴다</p>
        <p>cancle속성에는 accept를 눌러서 확인했을시 실행하는 함수,또는 소스를 값으로 가진다.</p>
        <p>ex) {cancle:this.cancleAlert}</p>
    </vs-card>

    <vs-card>
        <vs-button @click="prompt1=true">Alert Primary</vs-button>
        <vs-prompt :active="prompt1" @accept="prompt1=false" @close="prompt1=false" @cancel="prompt1=false" :is-valid="false">
            <div class="con-exemple-prompt">
                Enter the security code
            </div>
        </vs-prompt>
        <p>script로만 dialogs가 띄워지는지 알았지만, vs-prompt ui로도 가능하다.</p>
        <p>vs-prompt</p>
        <p>vs-prompt로 dialogs를 띄웠을시 추가 가능한 옵션이 있음</p>
        <p>:is-valid="false" accept를 막는다.</p>
    </vs-card>

    <vs-card>
        <vs-button @click="prompt2=true">Alert Primary</vs-button>
        <vs-prompt :active="prompt2" @accept="prompt2=false" @close="prompt2=false" @cancel="prompt2=false" :buttons-hidden="true">
            <div class="con-exemple-prompt">
                Enter the security code
            </div>
        </vs-prompt>
        <p>buttons-hidden | 하단의 버튼을 가린다.</p>
    </vs-card>

    <vs-card>
        <vs-button @click="prompt3=true">Alert Primary</vs-button>
        <vs-prompt :active="prompt3" @accept="prompt3=false" @close="prompt3=false" @cancel="prompt3=false" :button-accept="false">
            <div class="con-exemple-prompt">
                Enter the security code
            </div>
        </vs-prompt>
        <p>:button-accept="false" | 하단의 승인 버튼을 가린다.</p>
    </vs-card>

    <vs-card>
        <vs-button @click="prompt4=true">Alert Primary</vs-button>
        <vs-prompt :active="prompt4" @accept="prompt4=false" @close="prompt4=false" @cancel="prompt4=false" button-cancel="border" accept-text="승인" cancel-text="취소">
            <div class="con-exemple-prompt">
                Enter the security code
            </div>
        </vs-prompt>
        <p>buttons-hidden="border" | 하단취소버튼 타입을 변경한다.</p>
        <p>accept-text="승인" | 승인버튼의 텍스트를 변경한다.</p>
        <p>cancel-text="취소" | 취소버튼의 텍스트를 변경한다.</p>
    </vs-card>
</template>

<style>

</style>