'use strict'

window.onload = (event) => {
    console.log("page is fully loaded")

    callYT('linkin-park')
        //.then(res => console.log(res))
        .then(res => createYTHTML(res))
        .catch(err => console.log(rej))

    // callWikipedia('linkin-park')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(rej))
  }


  function createYTHTML(videos){
    let htmlStr = ''
    videos.forEach(vid => {
        htmlStr += `<article>
        <img src="${vid.img}" alt="${vid.title}">
        <h3>${vid.title}</h3>
        </article>`
    })

    const ytArea = document.querySelector('.result-container')
    ytArea.innerHTML = htmlStr
    return htmlStr
  } 

  