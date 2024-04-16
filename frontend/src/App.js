
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import StudentDash from './views/StudentDash';
import Notifications from './components/Notifications';
import RateTutor from './components/RateTutor';
import TutoringReqApplication from './components/TutoringReqApplication';
import MakeAppointment from './components/MakeAppointment';
import TutorDash from './views/TutorDash';
import LookForTutor from './components/LookForTutor';
import SideNavBar from './components/SideNavBar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
      <Route index element={<StudentDash/>} />
      <Route path="/studentdash" element={<StudentDash/>} />
      <Route path="/notifications" element={<Notifications/>} />
      <Route path="/ratetutor" element={<RateTutor/>} />
      <Route path="/tutoringreqapplication" element={<TutoringReqApplication/>} />
      <Route path="/makeappointment" element={<MakeAppointment/>} />
      <Route path="/switchtotutor" element={<TutorDash/>} />
      <Route path="/lookfortutor" element={<LookForTutor/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

