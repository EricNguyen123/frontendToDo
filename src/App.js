import { privateRoutes } from '~/Routers';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '~/page/home';
import config from './config';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={config.routes.home} element={<Navigate to={config.routes.myday} />} />
                    {privateRoutes.map((routes, index) => {
                        let Layout = Home;
                        if (routes.layout) {
                            Layout = routes.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <routes.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
