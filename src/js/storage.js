var storage = {
	get (Storage_key) {
		return JSON.parse(window.localStorage.getItem(Storage_key) || '[]')
	},
	set (Storage_key,items) {
		window.localStorage.setItem(Storage_key, JSON.stringify(items))
	},
	remove (Storage_key){
		window.localStorage.removeItem(Storage_key)
	}
}

export default storage;