import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "./mutations.js"; // Asumiendo que tienes un archivo con tus mutaciones
import { useHistory } from "react-router-dom";

// Importar estilos de Bootstrap dark

import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ onLogin }) => {
    const [shop, setShop] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [loginMutation] = useMutation(LOGIN_MUTATION, {
        onCompleted: (data) => {
            setLoading(false);
            localStorage.setItem("token", data.login.token);
            window.location.href = "/admin";
            setError("");
            onLogin();
        },
        onError: (error) => {
            setLoading(false);
            setError(
                "Error al iniciar sesión. Por favor, verifica tus credenciales."
            );
            console.error("Login error:", error);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        loginMutation({
            variables: { shop, email, password },
        });
    };

    return (
        <div>
            {loading && <div>¡Cargando! Por favor, espera...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black px-0">
                            <div className="px-5 ms-xl-4">
                                <i
                                    className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                                    style={{ color: "#709085" }}
                                ></i>
                                {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form
                                    style={{ width: "23rem" }}
                                    onSubmit={handleSubmit}
                                >
                                    <h3
                                        className="fw-normal mb-3 pb-3"
                                        style={{ letterSpacing: "1px" }}
                                    >
                                        Login
                                    </h3>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="shop"
                                            className="form-control form-control-lg"
                                            value={shop}
                                            placeholder="url de la tienda"
                                            onChange={(e) =>
                                                setShop(e.target.value)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="shop"
                                            // cambbiar tamaño de letra
                                            style={{ fontSize: "0.9rem" }}
                                        >
                                            Shop
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control form-control-lg"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Email"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="email"
                                            style={{ fontSize: "0.9rem" }}
                                        >
                                            Email address
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control form-control-lg"
                                            value={password}
                                            placeholder="Contraseña"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="password"
                                            style={{ fontSize: "0.9rem" }}
                                        >
                                            Contraseña
                                        </label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button
                                            className="btn btn-info btn-lg btn-block"
                                            type="submit"
                                            style={{
                                                letterSpacing: "1px",
                                                color: "#fff",
                                            }}
                                        >
                                            Iniciar sesión
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                alt="Login image"
                                className="w-100 vh-100"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "left",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
