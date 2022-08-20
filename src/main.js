import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

createApp(App)
    .use(Vuesax,{
        theme:{
            colors:{
                primary:'rgb(26, 92, 255)',
                success:'rgb(23, 201, 100)',
                danger:'rgb(242, 19, 93)',
                warning:'rgb(255, 130, 0)',
                dark:'rgb(36, 33, 69)'
            }
        }
    })
.mount('#app')
