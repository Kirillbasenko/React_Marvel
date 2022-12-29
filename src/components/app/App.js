import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import {MainPage, ComicsPage, SingleComicPage, SinglePage} from "../pages"

const Page404 = lazy(() => import("../pages/404Page/404"))

const App = () => {

    return (
    <Router>
        <div className="wrraper">
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="React_Marvel/" element={<MainPage/>}/>
                            <Route path="/comics/*" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>} dataType="comic"/>
                            <Route path="/characters/:id"  element={<SinglePage/>} dataType="characters"/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </div>
    </Router>
    )
}

export default App;