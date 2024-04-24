import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <Router>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/dashboard" element={<Dashboard />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</Router>
        </>
    );
}

export default App;
