// En el archivo queries.js
import { gql } from "@apollo/client";

export const CLIENTES_LISTADO = gql`
    query CLIENTES_LISTADO($limit: Int!, $page: Int!) {
        clientesAll(limit: $limit, page: $page, reverse: true) {
            pageInfo {
                hasNextPage
                hasPrevPage
                totalDocs
                limit
                page
                totalPages
            }
            docs {
                _id
                apellidos
                codigoCliente
                complemento
                email
                nombres
                numeroDocumento
                razonSocial
                codigoExcepcion
                tipoDocumentoIdentidad {
                    codigoClasificador
                    descripcion
                }
                telefono
                state
                usucre
                createdAt
                usumod
                UpdatedAt
            }
        }
    }
`;
