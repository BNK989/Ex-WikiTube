'use strict'

const YT_KEY = 'AIzaSyAOSYBPy0EXZJE1yz4n5zGRzaL-_OfGOKM'
const YTDB_KEY = 'YouTubeDB'

function callYT(searchTerm){
    const st = formatStr(searchTerm)
    const pastSearches = loadFromStorage(YTDB_KEY) || {}
    if (pastSearches[st]) {
        console.log('cached')
        return Promise.resolve(pastSearches[st])
    }

    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${searchTerm}`
    console.log('axios')
    return axios.get(apiUrl)
        .then((res) => {
            const dataItems = res.data.items
            const cleanData = cleanYTData(dataItems)

            pastSearches[st] = cleanData
            saveToStorage(YTDB_KEY, pastSearches)

            return cleanData
        })

        .catch(err => console.log('err:', err))
    }

    function cleanYTData(data) {
        return data.map((item) => { 
            return {
            id: item.id.videoId,
            img: item.snippet.thumbnails.medium.url,
            title: item.snippet.title,
        }})
    }

    // WIKIPEDIA

    function callWikipedia(searchTerm){
        const st = formatStr(searchTerm)

        // const pastSearches = loadFromStorage(YTDB_KEY) || {}
        // if (pastSearches[st]) {
        //     console.log('cached')
        //     return Promise.resolve(pastSearches[st])
        // }
    
        const apiUrl = `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${st}&format=json`
        console.log('axios')
        return axios.get(apiUrl)
            .then((res) => {
                const dataItems = res.data.query.search
                const cleanData = dataItems.map((v) => { 
                    return {
                        title: v.title,
                        snippet: v.snippet
                }})
    
                // pastSearches[st] = cleanData
                // saveToStorage(YTDB_KEY, pastSearches)
    
                return cleanData
            })
    
            .catch(err => console.log('err:', err))
        }




    //callYT()

    //`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`

    const demoData = {
        "kind": "youtube#searchListResponse",
        "etag": "LmjTImnLcf8fWbxmQfs2oU9ZoNI",
        "nextPageToken": "CAUQAA",
        "regionCode": "IL",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 5
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "SbnDRlNt60eplZtuu0wre_WBmK0",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "HMluqSGag5E"
                },
                "snippet": {
                    "publishedAt": "2024-02-23T05:00:11Z",
                    "channelId": "UCZU9T1ceaOgwfLRq7OKFU4Q",
                    "title": "Friendly Fire [Official Music Video]  - Linkin Park",
                    "description": "Papercuts - Singles Collection (2000-2023) | Available April 12 | \"Friendly Fire\" from the One More Light 2017 Sessions, Out Now.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HMluqSGag5E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HMluqSGag5E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HMluqSGag5E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Linkin Park",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-02-23T05:00:11Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "t-XKEBbYjvigrsxndUeqGBBSAjY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "eVTXPUF4Oz4"
                },
                "snippet": {
                    "publishedAt": "2009-10-26T18:31:10Z",
                    "channelId": "UCZU9T1ceaOgwfLRq7OKFU4Q",
                    "title": "In The End [Official HD Music Video] - Linkin Park",
                    "description": "Papercuts - Singles Collection (2000-2023) | Available April 12 | \"Friendly Fire\" from the One More Light 2017 Sessions, Out Now: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eVTXPUF4Oz4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eVTXPUF4Oz4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eVTXPUF4Oz4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Linkin Park",
                    "liveBroadcastContent": "none",
                    "publishTime": "2009-10-26T18:31:10Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "LNJDRqzImXlyMkqTpvN2C7DeC2Q",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "kXYiU_JCYtU"
                },
                "snippet": {
                    "publishedAt": "2007-03-05T08:12:00Z",
                    "channelId": "UCZU9T1ceaOgwfLRq7OKFU4Q",
                    "title": "Numb (Official Music Video) [4K UPGRADE] – Linkin Park",
                    "description": "Subscribe to the channel: https://bit.ly/1EBzxN2 Papercuts - Singles Collection (2000-2023) | Available April 12 | \"Friendly Fire\" ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kXYiU_JCYtU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kXYiU_JCYtU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kXYiU_JCYtU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Linkin Park",
                    "liveBroadcastContent": "none",
                    "publishTime": "2007-03-05T08:12:00Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "-wStf2RaFLRdNRqa5SAWc9Ru6Cs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "LQ3G7QaYgMA"
                },
                "snippet": {
                    "publishedAt": "2023-03-30T13:00:21Z",
                    "channelId": "UCgWMA94hHlV2K-W--DLRViA",
                    "title": "Linkin Park Full Album | The Best Songs Of Linkin Park Ever",
                    "description": "rockmusic #rock #alternativerock #linkinpark Linkin Park Full Album | The Best Songs Of Linkin Park Ever ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LQ3G7QaYgMA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LQ3G7QaYgMA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LQ3G7QaYgMA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Alternative Rock Music",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-03-30T13:00:21Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "T1pPEOCVzjMagLWKc_Fg5HEtfgI",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "LYU-8IFcDPw"
                },
                "snippet": {
                    "publishedAt": "2009-10-24T01:13:40Z",
                    "channelId": "UCZU9T1ceaOgwfLRq7OKFU4Q",
                    "title": "Faint (Official Music Video) [4K UPGRADE] – Linkin Park",
                    "description": "Papercuts - Singles Collection (2000-2023) | Available April 12 | \"Friendly Fire\" from the One More Light 2017 Sessions, Out Now: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LYU-8IFcDPw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LYU-8IFcDPw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LYU-8IFcDPw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Linkin Park",
                    "liveBroadcastContent": "none",
                    "publishTime": "2009-10-24T01:13:40Z"
                }
            }
        ]
    }
