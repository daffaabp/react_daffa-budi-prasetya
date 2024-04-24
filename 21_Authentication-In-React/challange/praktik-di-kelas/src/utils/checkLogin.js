
export function checkLogin() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navigate = useNavigate();

    if (isLoggedIn !== "true") {
        return isLoggedIn;
    }
    console.log("check login");
}
