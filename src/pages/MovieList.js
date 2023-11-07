import {useEffect, useState} from "react";
import {getMoiveList} from "../api/MovieAPI";
import MovieItem from "../components/MovieItem";

function MovieList() {

    const [movieList,setMovieList] = useState();

    useEffect(() => {
        //비동기적 호출은 then으로 잘 써줘야함
        getMoiveList().then(data => setMovieList(data));
    }, []);

    console.log(movieList);
//처음엔 언디파인드여서 movieList라 map으로 표현 못하므로
    return (
        <div className="content-row">
            { movieList && movieList.map(movie => <MovieItem key={ movie.movieCd } movie={movie}/>)}
        </div>
    );
}

export default MovieList;