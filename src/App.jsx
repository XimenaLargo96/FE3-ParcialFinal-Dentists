// eslint-disable-next-line
import { useContext , useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet , useNavigate , useLocation} from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {

  const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		location.pathname === "/" && navigate("/home");
	}, []);
  const {state} = useContext(ContextGlobal)

  return (
      <div className={state.theme ? 'dark':'light'}>
          <Navbar/>
          <main>
          <Outlet />
          </main>
          <Footer/>
      </div>
  );
}

export default App;
