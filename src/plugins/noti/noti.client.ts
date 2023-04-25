import Noti  from './Noti.vue'
import { createApp } from 'vue';

export default {
    install: (app) => {
        const nuxtApp = useNuxtApp();

        function createComponent(options) {
            app.component('Noti', Noti);
            const body = document.querySelector('body');
            const div = document.createElement('div');
            div.classList.add('notification');
            div.style.position = 'fixed';
            div.style.top = '6rem';
            div.style.right = '1rem';
            div.style.border = '1px solid transparent';
            div.style.zIndex = '9999';
            body?.appendChild(div);

            const MyComponent = createApp(app.component('Noti'), {
                title: options?.title || 'Notification',
                content: options?.content || 'Show notification!',
                status: options?.status || 'success',
                elementMinWidth: 300,
                elementMaxWidth: 700,
            })
            MyComponent.mount(div)
            return MyComponent
        }

        function init(options: object) {
            const body = document.querySelector('body');
            const divRemove = document.querySelector('.notification')
            if (divRemove) {
                body?.removeChild(divRemove)
            }
            createComponent(options)
        }

        nuxtApp.provide('notification', (options: object) => init(options));
    }
}