import { computed, Ref } from "vue"

export const useSearch = (searchText: Ref<string>, list: Ref<string[]>) => {
    const executeSearch = (searchText: string, list: string[]): string[] => {
        let filteredList: string[] = list
        if (searchText) {
          filteredList = list.filter((item) =>
            item.includes(searchText.toLowerCase())
          );
        }

        return filteredList;
    };
      
    const filteredList = computed(() => {
        return executeSearch(searchText.value, list.value);
    });

    return {
        filteredList
    }
} 