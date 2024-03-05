'use strict'

window.onload = (event) => {
    addListeners()
    getYTData()
    getWikiData()

  }

  function addListeners(){
    const input = document.getElementById('search-input')
    input.addEventListener( 'input', debounce( (event) => {
        onSearch(event)
      }, 999)
    )
  }

  function getYTData(searchTerm = 'linkin-park'){
    callYT(searchTerm)
    .then(res => {
        createYTHTML(res)
        setVideo(res[0].id)
    })
    .catch(err => console.log(rej))

  }

  function getWikiData(searchTerm = 'linkin-park'){
    callWikipedia(searchTerm)
    .then(res => {
        setWikiData(res)
    })
    .catch(err => console.log(rej))
  }

  function createYTHTML(videos){
    let htmlStr = ''
    videos.forEach(vid => {
        htmlStr += `<article onclick="setVideo('${vid.id}')">
        <img src="${vid.img}" alt="${vid.title}">
        <h3>${vid.title}</h3>
        </article>`
    })

    const ytArea = document.querySelector('.result-container')
    ytArea.innerHTML = htmlStr
    return htmlStr
  } 

  function setVideo(id){
    let width = window.innerWidth
    let height
    if(width <= 700){
        width = window.innerWidth / 1.1;
        height = (width / 16) * 9;
    }else{
        width = window.innerWidth / 2.5;
        height = (width / 16) * 9;
    }

    const iframeStr = `<iframe width="${width}" height="${height}"
    src="https://www.youtube.com/embed/${id}">
    </iframe>`
    const vidArea = document.querySelector('.place-holder-for-vid')
    vidArea.innerHTML = iframeStr

  }
  
  function setWikiData(data){
    let htmlStr = ''
    data.forEach((part)=>{
        htmlStr += `<li><a target="_blank" href="https://en.wikipedia.org/?curid=${part.pageId}"><h6>${part.title}</h6>
        <p>${part.snippet}</p>
        </a></li>`
    })
    const htmlArea = document.querySelector('.content-from-wiki ul')
    htmlArea.innerHTML = htmlStr
  }

  function onSearch(e){
    console.log(e.target.value)
    const st = formatStr(e.target.value)
    getYTData(st)
    getWikiData(st)

  }

  