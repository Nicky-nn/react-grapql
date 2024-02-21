import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CLIENTES_LISTADO } from "./queries.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const DataTable = ({ limit, page }) => {
    const [tableData, setTableData] = useState([]);
    const token = localStorage.getItem("token");

    const { loading, error, data, refetch } = useQuery(CLIENTES_LISTADO, {
        variables: { limit, page },
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    });

    useEffect(() => {
        if (data) {
            setTableData(data.clientesAll.docs);
        }
    }, [data]);

    const handleRefresh = async () => {
        try {
            const validLimit = !isNaN(parseInt(limit)) ? parseInt(limit) : 30;
            const validPage = !isNaN(parseInt(page)) ? parseInt(page) : 1;

            await refetch({ limit: validLimit, page: validPage });
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const validLimit = !isNaN(parseInt(limit)) ? parseInt(limit) : 30;
                const validPage = !isNaN(parseInt(page)) ? parseInt(page) : 1;
    
                await refetch({ limit: validLimit, page: validPage });
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
    
        fetchData();
    }, [limit, page, refetch]);

    if (loading) return <p>Cargando...</p>;

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
                {error.message.includes("validation failed on limit") && (
                    <p>El límite proporcionado no es válido. Por favor, ingresa un número válido para el límite.</p>
                )}
                {error.message.includes("validation failed on page") && (
                    <p>La página proporcionada no es válida. Por favor, ingresa un número válido para la página.</p>
                )}
                <p>Ocurrió un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.</p>
            </div>
        );
    }

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={handleRefresh} className="btn btn-primary btn-refresh">
                <FontAwesomeIcon icon={faSync} />
            </button>

            <table id="example" className="table table-striped" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Estado</th>
                        {/* Agrega más columnas según tus datos */}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((cliente) => (
                        <tr key={cliente._id}>
                            <td>{cliente.razonSocial}</td>
                            <td>{cliente.apellidos}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
