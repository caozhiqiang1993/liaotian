var i_cookie = {
	get(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return true;
			// return (arr[2]);
		} else {
			return false
		}
	},
	set(name, value, expiredays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
	},
	del(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	},
	created() {
		this.setCookie('openId', 123, 2)
		if (this.getCookie('openId')) {
			console.log('has cookie')

			this.delCookie('openId')
		} else {
			console.log('has not cookie')
		}
	}
}

export default i_cookie;