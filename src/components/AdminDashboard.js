import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "@webpixels/css/dist/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DataTable from "./DataTable";
import RegistroClienteForm from "./RegistroCliente";

const AdminDashboard = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <a
                className="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative"
                href="https://nick-russell.vercel.app/"
                style={{
                    zIndex: "1000",
                }}
            >
                <strong>Admin Lyl</strong> Diseño con Bootstrap 5. By Nick
            </a>
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <nav
                    className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
                    id="navbarVertical"
                >
                    <div className="container-fluid">
                        <button
                            aria-controls="sidebarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            className="navbar-toggler ms-n2"
                            data-bs-target="#sidebarCollapse"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a
                            className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center"
                            href="/dashboard"
                        >
                            {/* <img
                                alt="..."
                                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/01/25184443/abstract-gradient-penguin-by-christophers15-dribbble.png"
                                className="navbar-brand-img me-2"
                                style={{ maxHeight: "50%" }} // Asegura que la imagen no exceda el tamaño del contenedor
                            /> */}
                            <span className="navbar-brand-text">Admin Lyl</span>
                        </a>

                        <div className="navbar-user d-lg-none">
                            <div className="dropdown">
                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-bs-toggle="dropdown"
                                    href="/dashboard"
                                    id="sidebarAvatar"
                                    role="button"
                                >
                                    <div className="avatar-parent-child">
                                        <img
                                            alt="Image Placeholder"
                                            className="avatar avatar- rounded-circle"
                                            src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                        />
                                        <span className="avatar-child avatar-badge bg-success" />
                                    </div>
                                </a>
                                <div
                                    aria-labelledby="sidebarAvatar"
                                    className="dropdown-menu dropdown-menu-end"
                                >
                                    <a
                                        className="dropdown-item"
                                        href="/dashboard"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="/dashboard"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="/dashboard"
                                    >
                                        Billing
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a
                                        className="dropdown-item"
                                        href="/dashboard"
                                    >
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="collapse navbar-collapse"
                            id="sidebarCollapse"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-house" /> Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-bar-chart" />{" "}
                                        Analitycs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-chat" /> Messages
                                        <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                                            6
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-bookmarks" />{" "}
                                        Collections
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-people" /> Users
                                    </a>
                                </li>
                            </ul>
                            <hr className="navbar-divider my-5 opacity-20" />
                            <ul className="navbar-nav mb-md-4">
                                <li>
                                    <div
                                        className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                                        href="/dashboard"
                                    >
                                        Contacts
                                        <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                                            13
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        className="nav-link d-flex align-items-center"
                                        href="/dashboard"
                                    >
                                        <div className="me-4">
                                            <div className="position-relative d-inline-block text-white">
                                                <img
                                                    alt="Image Placeholder"
                                                    className="avatar rounded-circle"
                                                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                />
                                                <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="d-block text-sm font-semibold">
                                                Marie Claire
                                            </span>
                                            <span className="d-block text-xs text-muted font-regular">
                                                Paris, FR
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="bi bi-chat" />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link d-flex align-items-center"
                                        href="/dashboard"
                                    >
                                        <div className="me-4">
                                            <div className="position-relative d-inline-block text-white">
                                                <span className="avatar bg-soft-warning text-warning rounded-circle">
                                                    JW
                                                </span>
                                                <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="d-block text-sm font-semibold">
                                                Michael Jordan
                                            </span>
                                            <span className="d-block text-xs text-muted font-regular">
                                                Bucharest, RO
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="bi bi-chat" />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link d-flex align-items-center"
                                        href="/dashboard"
                                    >
                                        <div className="me-4">
                                            <div className="position-relative d-inline-block text-white">
                                                <img
                                                    alt="..."
                                                    className="avatar rounded-circle"
                                                    src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                />
                                                <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="d-block text-sm font-semibold">
                                                Heather Wright
                                            </span>
                                            <span className="d-block text-xs text-muted font-regular">
                                                London, UK
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="bi bi-chat" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-auto" />
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-person-square" /> Mi
                                        cuenta
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            window.location.href = "/";
                                        }}
                                    >
                                        <i className="bi bi-box-arrow-left" />{" "}
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                        <h1 className="h2 mb-0 ls-tight">
                                            Listado de Clientes
                                        </h1>
                                    </div>
                                    <div className="col-sm-6 col-12 text-sm-end">
                                        <div className="mx-n1">
                                            <a
                                                className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                                                href="/dashboard"
                                            >
                                                <span className=" pe-2">
                                                    <i className="bi bi-pencil" />
                                                </span>
                                                <span>Edit</span>
                                            </a>
                                            <a
                                                className="btn d-inline-flex btn-sm btn-primary mx-1"
                                                onClick={openModal}
                                            >
                                                <span className=" pe-2">
                                                    <i className="bi bi-plus" />
                                                </span>
                                                <span onClick={openModal}>
                                                    Crear Cliente
                                                </span>
                                            </a>
                                            <RegistroClienteForm
                                                isOpen={modalIsOpen}
                                                onClose={closeModal}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs mt-4 overflow-x border-0">
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link active"
                                            // href="/dashboard"
                                        >
                                            Todos
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-regular">
                                            Descargas
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <DataTable />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
