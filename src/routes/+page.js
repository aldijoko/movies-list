/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=70bde69caffef0294416c72116362f3d&language=en-US&page=1');
    const data = await res.json();
    const popular = data.results;
    // console.log(data)
    if(res.ok){
        return {
             popular: popular
        };
    }
  }