

// function App() {
//   return (
//
//   <BrowserRouter>
//     <Routes>
//       <Route>
//         <Route pate="/" element={ <Layout/> }>
//             <Route index element={ <Main/> }/>
//             <Route path="movie" element={ <MovieList/> }/>
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   );
// }
//
// export default App;

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={ <Main/> }/>
                        <Route path="movie" >
                            <Route index element={ <MovieList/> }/>
                            <Route path=":movieCd" element={ <MovieDetail/>}/>
                        </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;





