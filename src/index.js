import './main.scss'
import bandsCollection from './bands.json'

document.addEventListener('DOMContentLoaded', function(){
    const bandsLiveListing = document.getElementById('bands-live-listing')
    const bands = bandsCollection.data

    bands.forEach(band => {
        let bandDOM = buildBandDOM(band)
        bandsLiveListing.insertAdjacentHTML('beforeend', bandDOM)
    });
})

function buildBandDOM(band) {
  return (
    `<div class="band">
        <img src="${bandsCollection.image_base_url.replace(`xxxARTIST-IDxxx`, `${band.art_id}`)}">
        <div class="band-info">
            <div class="album-title">${band.album_title}</div>
            <div class="artist-title">${band.artist_title}</div>
            <div class="gen-text">${band.genre_text}</div>
        </div>
    </div> <!--.card -->`
  )
}