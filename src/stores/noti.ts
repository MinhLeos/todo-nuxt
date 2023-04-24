import { defineStore } from "pinia";

export const useShowNotification = defineStore('notification', () => {
    const isShowNoti = ref(false);
    const isCloseNoti = ref(false);
    return {
        isShowNoti,
        isCloseNoti,
    }
})