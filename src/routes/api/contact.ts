type JSONBody = {
    body: string;
};

type NameAndEmail = {
    name: string;
    email: string;
};
export const post = (request: JSONBody) => {
    const formBody: NameAndEmail = JSON.parse(request.body);
    const name: string = formBody.name;
    const email = formBody.email;

    return {
        body: {
            name,
            email,
        },
    };
};
