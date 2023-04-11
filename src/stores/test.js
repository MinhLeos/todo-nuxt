import { defineStore } from "pinia";

export const useTestStore = defineStore("test", () => {
  const title = ref('Title')

  return {
    // todosList: shallowReadonly(todosList),
    title,
  };
});