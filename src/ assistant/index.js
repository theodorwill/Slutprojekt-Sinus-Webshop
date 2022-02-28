
//This file contains some helper functions format to re-use in project

//LoalStorage....................................
export function getLocalStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Error in getting data from localStorage', error)
      return null
    }
  }
  
  export function setLocalStorage(key, data){
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Error in setting data to localStorage', error)
    }
  }