
export async function getResponseApi(url){
    const response = await fetch(url);
    return response.json();
}


