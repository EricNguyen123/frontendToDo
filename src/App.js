import { privateRoutes } from '~/Routers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '~/page/home';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
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
