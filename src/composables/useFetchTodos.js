export default async (search, searchValue, filter, filterValue) => {
  // const { data, error, refresh} = await useFetch("/api/todo/list", {
  //   params: {
  //     search,
  //     searchValue,
  //     filter,
  //     filterValue,
  //   },
  // }, { initialCache: false });
  // console.log('refresh', refresh)
  // if (error.value) {
  //   throw createError({
  //     ...error.value,
  //     statusMessage: "Unable to fetch todos list",
  //   });
  // }

  // return {
  //   refresh,
  //   todosList: data.value
  // };
  return useFetch("/api/todo/list", {
    params: {
      search,
      searchValue,
      filter,
      filterValue,
    },
  }, { initialCache: false });
};
