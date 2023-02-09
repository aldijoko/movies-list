/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    // console.log(params)
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.slug}?api_key=70bde69caffef0294416c72116362f3d&language=en-US`);
    const data = await res.json();
    // console.log(data)
    // console.log(data)
    if(res.ok){
        return {
             movieDetails: data
        };
    }
  }