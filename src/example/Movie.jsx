function Movie(props) {

  const { title, year, rating, liked } = props.movie;
    
  return (
      <div className='title'>
          <div><b>Title:</b> {title}</div>
          <div><b>Year:</b> {year}</div>
          <div><b>Rating:</b> {rating}</div>
          {liked ? <div><b>Liked:</b>Bello</div> : undefined}
          <br/><br/><br/>
        </div>
    );
  }

  export default Movie;