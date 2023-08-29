import { privateRoutes } from '~/Routers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {privateRoutes.map((routes, index) => (
                        <Route key={index} path={routes.path} element={<routes.component />} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
