import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
var socket = {
	ws:{},
	name:{},
	connectSocket(uid){
		console.log(222,Vue)
		// if(!window.localStorage.getItem('key')){
			this.name = uid;
			// 创建websocket
			this.ws = new WebSocket("ws://"+document.domain+":7272");
			// 当socket连接打开时，输入用户名
			this.ws.onopen = this.onOpen
			// 当有消息时根据消息类型显示不同信息
			this.ws.onmessage = this.onmessage;
			this.ws.onclose = function() {
			  console.log("连接关闭，定时重连");
			  socket.connectSocket();
			};
			this.ws.onerror = function() {
				  console.log("出现错误");
			};
		// }
	},
	onOpen(){
		var login_data = '{"type":"login","client_name":"22","room_id":"1","key":"'+socket.name+'"}';
        console.log("websocket握手成功，发送登录数据:"+login_data);
		console.log(3232,this)
        socket.ws.send(login_data);
	},
	onmessage(e){
        console.log(e);
        console.log(e.data);
        var data = eval("("+e.data+")");
        if(data['type'] == 'init'){
        	Vue.http.jsonp('http://192.168.2.52:333/api/login/bindUid', {
				params:{
					key: socket.name,
					client_id: data['client_id']
				}
			}).then(msg => {
				console.log(msg);
				/*if (msg.body.status) {
					this.storage.set('key',msg.body.data.key)
					router.push({path:'/'})
				}else{
					this.$messagebox.alert(msg.body.msg, 'error');
				}*/
			}, response => {
				console.log('error', response)
			})
        }
        /*switch(data['type']){
            // 服务端ping客户端
            case 'ping':
                ws.send('{"type":"pong"}');
                break;;
            // 登录 更新用户列表
            case 'login':
                //{"type":"login","client_id":xxx,"client_name":"xxx","client_list":"[...]","time":"xxx"}
                say(data['client_id'], data['client_name'],  data['client_name']+' 加入了聊天室', data['time']);
                if(data['client_list'])
                {
                    client_list = data['client_list'];
                }
                else
                {
                    client_list[data['client_id']] = data['client_name']; 
                }
                flush_client_list();
                console.log(data['client_name']+"登录成功");
                break;
            // 发言
            case 'say':
                //{"type":"say","from_client_id":xxx,"to_client_id":"all/client_id","content":"xxx","time":"xxx"}
                say(data['from_client_id'], data['from_client_name'], data['content'], data['time']);
                break;
            // 用户退出 更新用户列表
            case 'logout':
                //{"type":"logout","client_id":xxx,"time":"xxx"}
                say(data['from_client_id'], data['from_client_name'], data['from_client_name']+' 退出了', data['time']);
                delete client_list[data['from_client_id']];
                flush_client_list();
        }*/
	}
}

export default socket;