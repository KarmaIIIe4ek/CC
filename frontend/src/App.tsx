import Home from "./components/home/index";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/user/auth";
import AdminAuthPage from "./components/admin_auth";
import AdminPage from "./components/admin_lk";
import PrivateRouteAdminAuth from "./utils/router/privateRouteAdmin"
import UserPage from "./components/lk";
import {ColorModeContext, useMode} from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material";
import LayoutComponent from "./components/layout";
import NewsComponent from "./components/news";
import SettingsComponent from "./components/settings";
import SubscribeComponent from "./components/subscribe";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayoutComponent>
                    <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        
                        <Route path="user/login" element={<AuthRootComponent />}/>
                        <Route path="user/register" element={<AuthRootComponent />}/>
                        <Route path="admin/login" element={<AdminAuthPage />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="user/lk" element={<UserPage />}/>
                            <Route path="user/lk/subscribe" element={<SubscribeComponent />}/>
                            <Route path="user/lk/news" element={<NewsComponent />}/>
                            <Route path="user/lk/settings" element={<SettingsComponent />}/>
                        </Route>
                        <Route element={<PrivateRouteAdminAuth />}>
                            <Route path="admin/lk" element={<AdminPage />}/>
                        </Route>
                        
                        </Routes>
                    </div>
                </LayoutComponent>
                
            </ThemeProvider>
            
        </ColorModeContext.Provider>
        
    );
}

export default App;

