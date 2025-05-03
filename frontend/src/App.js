import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Quiz from "./Pages/Quiz";
import University from './Pages/University';
import Campuses from './Pages/Campuses';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/quiz"} element={<Quiz />} />
                <Route path={"/universities"} element={<University />} />
                <Route path={"/campus"} element={<Campuses />} />
            </Routes>
        </Router>
    );
}

export default App;