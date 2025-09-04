export function saveLocalStorage(obj){
    localStorage.setItem(obj.key, JSON.stringify(obj.value))
}

export function getLocalStorage(obj){
    console.log(obj.key)
    const stored = localStorage.getItem(obj.key)
    return stored ? JSON.parse(stored) : []
}
