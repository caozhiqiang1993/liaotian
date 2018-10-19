var sessionStorage = {
	get (Storage_key) {
		return JSON.parse(window.sessionStorage.getItem(Storage_key) || '[]')
	},
	set (Storage_key,items) {
		window.sessionStorage.setItem(Storage_key, JSON.stringify(items))
	},
	remove (Storage_key){
		window.sessionStorage.removeItem(Storage_key)
	}
}

export default sessionStorage;