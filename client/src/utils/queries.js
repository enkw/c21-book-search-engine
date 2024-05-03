export const GET_ME = `
{
    me {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            description
            image
            link
            title
        }
    }
}
`;