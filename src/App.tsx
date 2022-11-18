import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import Header from "./components/header";
import Main from "./view/main";
import NotFound from "./view/notfound";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
                position="bottom-center"
                theme="dark"
                transition={Slide}
            />
        </Router>
    );
}

export default App;
