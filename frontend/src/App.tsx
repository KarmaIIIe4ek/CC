import Home from "./components/home/index";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/user/auth";
import AdminAuthPage from "./components/admin/admin_auth";
import AdminPage from "./components/admin/admin_lk";
import PrivateRouteAdminAuth from "./utils/router/privateRouteAdmin"
import UserPage from "./components/user/lk";
import {ColorModeContext, useMode} from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    
                    <Route path="user/login" element={<AuthRootComponent />}/>
                    <Route path="user/register" element={<AuthRootComponent />}/>
                    <Route path="admin/login" element={<AdminAuthPage />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="user/lk" element={<UserPage />}/>
                    </Route>
                    <Route element={<PrivateRouteAdminAuth />}>
                        <Route path="admin/lk" element={<AdminPage />}/>
                    </Route>
                    
                    </Routes>
                </div>
            </ThemeProvider>
            
        </ColorModeContext.Provider>
        
    );
}

export default App;

