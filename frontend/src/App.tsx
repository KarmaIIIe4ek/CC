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
import ServicesComponent from "./components/services";
import RatesComponent from "./components/rates";
import MainComponent from "./components/main";
import AboutComponent from "./components/about";
import SupportComponent from "./components/support";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <div className="App">
                    <Routes>
                        <Route element={<Home />}>
                            <Route path="" element={<MainComponent />}/>
                            <Route path="services" element={<ServicesComponent />}/>
                            <Route path="rates" element={<RatesComponent />}/>
                            <Route path="about" element={<AboutComponent />}/>
                            <Route path="support" element={<SupportComponent />}/>
                        </Route>
                        <Route element={<LayoutComponent/ >}>
                            <Route path="user/login" element={<AuthRootComponent />}/>
                            <Route path="user/register" element={<AuthRootComponent />}/>
                            <Route path="admin/login" element={<AdminAuthPage />} />
                            <Route element={<PrivateRoute />}>
                                <Route path="user/lk" element={<UserPage />}/>
                                <Route path="user/lk/subscribe" element={<SubscribeComponent />}/>
                                <Route path="user/lk/news" element={<NewsComponent />}/>
                                <Route path="user/lk/settings" element={<SettingsComponent />}/>
                            </Route>
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

