import httpService from "./http.service";
const todosEndPoint = "todos/";
const postsEndPoint = "posts/";

const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndPoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    post: async (dataRequest) => {
        const {data} = await httpService.post(postsEndPoint, dataRequest)
        return data
    }
};
export default todosService;
