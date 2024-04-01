import {Link, Outlet} from 'react-router-dom'
// export PropTypes from "prop-types";

// export default function Navbar(props) {
// return (
// <div>
    // props dari Appjs = {props.nama}
    // {props.nama === "john" && <h1 className="red">Hai Kamu admin John</h1>}
    // </div>
// );
// }

// Navbar.propTypes = {
// nama: PropTypes.string.isRequired,
// }



export default function Navbar() {
// props
// state = variabel di dalam function
// nama = "= variabel nama"
// props.nama = "muchson";
// semua hal yang diatas return maka tidak pernah akan ditampilkan pada layar tapi akan tetap berjalan

const numbers = [1, 2, 3, 4, 5];
return (
<div>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={`/hero`}>Hero</Link>
                </li>
                <li>
                    <Link to={`/dashboard`}>Dashboard</Link>
                </li>
                {numbers.map((number) => (
                <li key={number}>
                    <Link to={`/hero/${number}`}>Hero {number}</Link>
                </li>
                ))}
            </ul>
            <ul>
                <li>
                    <Link to="/muchson">Not Found</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    </div>
    <hr>
    </hr>
    <Outlet />
</div>
);
}
