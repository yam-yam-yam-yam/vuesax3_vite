<script setup>
import { ref } from 'vue'
</script>

<template>
    <vs-card>
        <vs-collapse>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item disabled>
                <template v-slot:header>
                    제목 (disabled 옵션)
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse> 
        <p>vscollapse는 아코디언 형태임</p>
        <p>vs-collapse 돔 밑에 vs-collapse-item을 여러개 두어 생성함</p>
        <p>header slot을 이용해 제목 생성 및, 기본타입으로는 제목을 클릭하여 내용을 펼침</p>
    </vs-card>    

    <vs-card>
        <vs-collapse accordion>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                ㅇㅁㄴㅇㅁ
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                ㅇㄴㅁㅇㄴ
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item disabled>
                <template v-slot:header>
                    제목 (disabled 옵션)
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse> 
        <p>accordion옵션을 줄 시 한가지의 아이템만 펼쳐진다고 되어있으나 실행이 되지않음</p>
    </vs-card>   

    <vs-card>
        <vs-collapse type="default">
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse>
        <p>type="default"</p>
    </vs-card>

    <vs-card>
        <vs-collapse type="shadow">
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse>
        <p>type="shadow"</p>
        <p>shadow type의 그림자가 얕아 커스텀함</p>
    </vs-card>

    <vs-card>
        <vs-collapse type="border">
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse>
        <p>type="border"</p>
    </vs-card>

    <vs-card>
        <vs-collapse type="margin">
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse>
        <p>type="margin"</p>
    </vs-card>

    <vs-card>
        <vs-collapse open-hover>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item>
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse> 
        <p>open-hover 옵션을 줄시 hover효과로 오픈함</p>
    </vs-card>   

    <vs-card>
        <vs-collapse>
            <vs-collapse-item icon-arrow="grade">
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
            <vs-collapse-item icon-arrow="label">
                <template v-slot:header>
                    제목
                </template>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </vs-collapse-item>
        </vs-collapse> 
        <p>icon 지정 가능</p>
    </vs-card>   
</template>

<style>

</style>