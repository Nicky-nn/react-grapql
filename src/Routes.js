// Importa las dependencias necesarias
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminDashboard from "./components/AdminDashboard";
import DataTable from "./components/DataTable";
import RegistroClienteForm from "./components/RegistroCliente";

// Define tus rutas usando el componente Routes
const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/card" element={<DataTable />} />
        <Route path="/client" element={<RegistroClienteForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
);

// Envuelve tus rutas en el componente Router
const RootComponent = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default RootComponent;
