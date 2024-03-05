'use strict'
function debounce(cb, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        cb(...args)
      }
  
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}

function makeId(length = 6) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let str = '';
  for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str
}

function formatStr(str) {
  const trimmedString = str.trim().toLowerCase()
  const replacedString = trimmedString.replace(/\s+/g, '_')

  return replacedString
}