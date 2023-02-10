/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    // console.log(params)
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=70bde69caffef0294416c72116362f3d&language=en-US&query=${params.name}&page=1&include_adult=false`);
    const data = await res.json();
    // console.log(data.results)
    console.log(data)
    if(res.ok){
        return {
             searchMovie: data.results
        };
    }
  }