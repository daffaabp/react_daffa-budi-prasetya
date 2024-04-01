import { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function HeroSections() {
  const {id} = useParams();
  useEffect(() => {
    // ketika ke halaman hero akan melakukan pemanggilan id : 1
  }, []);
  // const {id} = match.params;

  // console.log(id);
return <div>HeroSection {id}</div>;
}

function NotFound() {
return <div>Page Not Found</div>;
}

function Home() {
return <div>Selamat datang di Home</div>;
}

function Login() {
return <div>Tolong Login dulu</div>;
}

function AppRouting() {
useEffect(() => {
  // disini itu fetch api, terus kalau berhasil login
}, []);

let isLoggedIn = false;

return (
<>
    <div>
        {/* Contoh Route 1 */}
        {/* <Routes>
            <Route path="/navbar" Component={Navbar} />
            <Route path="/hero" Component={HeroSections} />
            <Route path="*" Component={NotFound} />
        </Routes> */}

        {/* Contoh Route Bersarang */}
        {/* <Routes>
            <Route path="/" element={<Navbar isLogin={true} />}>
            <Route path="/hero" element={<HeroSections />} />
            <Route path="login" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes> */}

        {/* Dynamic Routing */}
        <Routes>
            <Route path="/" element={<Navbar nama={"muchson"} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/hero/:id" element={<HeroSections />} />
            <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </div>
    <div>
        <h1 style={{ backgroundColor: "gray" }}>Footer</h1>
    </div>
</>
)
}

export default AppRouting;
