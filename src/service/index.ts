const get_users = async (props: SearchObject) => {
    try {
        const { login, page, perPage } = props;
        const result: any = await window.fetch(
            `${process.env.REACT_APP_GITAPI}/search/users?q=${login}%20in%3Alogin&per_page=${perPage}&page=${page}`
        );

        switch (result.status) {
            case 200:
                return result.json();
            case 403:
                throw new Error("403");
            default:
                throw new Error("500");
        }
    } catch (err: any) {
        throw new Error(err.message);
    }
};

const Action = {
    get_users,
};

export default Action;
