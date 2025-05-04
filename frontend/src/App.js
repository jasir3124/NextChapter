import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import Home from './Pages/Home';
import University from './Pages/University';
import Campuses from './Pages/Campuses';
import Quiz from "./Pages/Quiz";
import About from "./Pages/About";
import QuizQuestions from "./Components/Quizes/QuizQuestions";
import UniversityDetail from './Components/UniDetails';
import ResultsPage from "./Pages/ResultsPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/quiz"} element={<Quiz/>}/>
                <Route path="/quiz/:id" element={<QuizQuestions />}/>
                <Route path={"/universities"} element={<University />} />
                <Route path="/universities/:id" element={<UniversityDetail />} />
                <Route path={"/campus"} element={<Campuses />} />
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/results"} element={<ResultsPage />}/>
            </Routes>
        </Router>
    );
}

export default App;