import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
    mutation Login($shop: String!, $email: String!, $password: String!) {
        login(shop: $shop, email: $email, password: $password) {
            token
        }
    }
`;
