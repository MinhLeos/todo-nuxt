export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const query = getQuery(event);
    const page = query.page ? +query.page : 1
    const itemPerPage = query.itemPerPage ? +query.itemPerPage : 10
    const start = (page - 1) * itemPerPage

    let data = {};

    return await fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(async res => {
        return await res.json().then((response) => {
            data = response.slice(start, start + itemPerPage);
            return data;
        })
    })
})