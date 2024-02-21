// En tu archivo tusQueries.js
import { gql } from "@apollo/client";

export const CLIENTE_REGISTRO = gql`
  mutation ClienteRegistro($input: ClienteInput!) {
    clienteCreate(input: $input) {
      _id
      razonSocial
      codigoCliente
      tipoDocumentoIdentidad {
        codigoClasificador
        descripcion
      }
      numeroDocumento
      complemento
      nombres
      apellidos
      email
    }
  }
`;
