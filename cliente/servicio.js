const URL="https://api.spotify.com/v1/artists/6xini6REf0CP8muuVvDa91/top-tracks?market=us"
const token= "Bearer BQCYqkoBGfa_Eul_LETZ9qkgEDpAaRYYZKnbNVvX_zmavFOCGMhnYGeqR5Au7dg82uJ5rG80dRT0WcComiBClzmNM3bLIBtM6_Tpkmp8IebbuPpNjjQGel7jbiUi1eCVf2_NRQSISMsbZmeMoVlkfDGl8nTHjSqYoMA"

let paremetros_peticion={
    method:"GET",
    headers:{Authorization:token}
}

fetch(URL,paremetros_peticion)

.then(function(respuesta){
    return (respuesta.json())
})

.then(function(respuetas_json){
    console.log(respuetas_json)
})
.catch(function(respuestas_error){
    console.log(respuestas_error)
})
