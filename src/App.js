import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './shared/Layout'
import Dashboard from './components/Dashboard'
import Robots from './components/Robots'
import Login from './components/Login'
import ForkLift from './components/ForkLift'
import Users from './components/Users'

function App() {
    return (
        <Router>
            <Routes>
                <Route index={true} element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="robots" element={<Robots />} />
                    <Route path="forklift" element={<ForkLift />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
