import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./view/main";
import NotFound from "./view/notfound";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
