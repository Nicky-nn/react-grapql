import React, { useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import { CLIENTE_REGISTRO } from "./graphql.js"; // Asegúrate de importar tu consulta de mutación

// Estilos para el modal (puedes personalizar según tus necesidades)
const modalStyles = {
    content: {
        width: "50%",
        margin: "auto",
        padding: "20px",
        zIndex: "1000",
    },
};

const tiposDocumento = [
    {
        codigoClasificador: "1",
        descripcion: "CI - CEDULA DE IDENTIDAD",
    },
    {
        codigoClasificador: "2",
        descripcion: "CEX - CEDULA DE IDENTIDAD DE EXTRANJERO",
    },
    {
        codigoClasificador: "5",
        descripcion: "NIT - NÚMERO DE IDENTIFICACIÓN TRIBUTARIA",
    },
    {
        codigoClasificador: "3",
        descripcion: "PAS - PASAPORTE",
    },
    {
        codigoClasificador: "4",
        descripcion: "OD - OTRO DOCUMENTO DE IDENTIDAD",
    },
];

const RegistroClienteForm = ({ isOpen, onClose }) => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        razonSocial: "",
        codigoTipoDocumentoIdentidad: "",
        numeroDocumento: "",
        complemento: "",
        email: "",
        telefono: "",
        nombres: "",
        apellidos: "",
        codigoExcepcion: "",
    });

    const [error, setError] = useState(null);

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Convertir campos numéricos a tipo número
            const parsedFormData = {
                ...formData,
                codigoTipoDocumentoIdentidad: parseInt(
                    formData.codigoTipoDocumentoIdentidad,
                    10
                ),
                codigoExcepcion: parseInt(formData.codigoExcepcion, 10),
            };

            // Llamar a la mutación con los datos del formulario
            const { data } = await clienteRegistroMutation({
                variables: {
                    input: parsedFormData,
                },
                context: {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            });

            // Aquí puedes manejar la respuesta de la mutación, como mostrar un mensaje de éxito, cerrar el modal, etc.
            console.log("Cliente registrado:", data.clienteCreate);

            // Limpiar los campos del formulario
            setFormData({
                razonSocial: "",
                codigoTipoDocumentoIdentidad: "",
                numeroDocumento: "",
                complemento: "",
                email: "",
                telefono: "",
                nombres: "",
                apellidos: "",
                codigoExcepcion: "",
            });

            setError(null);
            // Cerrar el modal después de un registro exitoso
            onClose();
        } catch (error) {
            console.error("Error al registrar el cliente:", error.message);

            // Actualizar el estado de error para mostrar en pantalla
            setError(error.message);
        }
    };

   

    // Configuración de la mutación
    const [clienteRegistroMutation] = useMutation(CLIENTE_REGISTRO);

    return (
        <div>
            {/* Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={modalStyles} // Aplicar estilos al modal
            >
                {/* Formulario de registro */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Razón Social:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="razonSocial"
                            value={formData.razonSocial}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Tipo de Documento Identidad:
                        </label>
                        <select
                            className="form-select"
                            name="codigoTipoDocumentoIdentidad"
                            value={formData.codigoTipoDocumentoIdentidad}
                            onChange={handleInputChange}
                            required

                        >
                            <option value="">Seleccionar</option>
                            {tiposDocumento.map((tipo) => (
                                <option
                                    key={tipo.codigoClasificador}
                                    value={tipo.codigoClasificador}
                                >
                                    {tipo.descripcion}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Número de Documento:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="numeroDocumento"
                            value={formData.numeroDocumento}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Complemento:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="complemento"
                            value={formData.complemento}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono:</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombres:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombres"
                            value={formData.nombres}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellidos:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Código Excepción:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="codigoExcepcion"
                            value={formData.codigoExcepcion}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Agregar más campos según tus necesidades */}
                    <button type="submit" className="btn btn-success">
                        Registrar
                    </button>
                </form>

                {error && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default RegistroClienteForm;
