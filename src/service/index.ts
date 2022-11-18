const get_users = async (props: SearchObject) => {
    const { login, page, perPage } = props;
    const result: any = await window.fetch(
        `https://api.github.com/search/users?q=${login}%20in%3Alogin&per_page=${perPage}&page=${page}`
    );

    return result.json();
};

const Action = {
    get_users,
};

export default Action;
