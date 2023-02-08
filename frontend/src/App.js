import Global from './styles/global';
import Routes from "./routes";
import AuthProvider from './contexts/AuthContext';

const App = () => {
    return (
      <>
      <AuthProvider>
        <Global />
        <Routes />
      </AuthProvider>
      </>
    )
};

export default App;