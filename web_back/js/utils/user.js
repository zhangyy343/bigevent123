//管理员模块：所有与管理员相关的功能都写在这里
var user={
    /**
     * 
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callback 回调函数
     */
    login:function(userName,password,callback){
        // alert('login');
        $.post(URLIST.user_login,{user_name:userName,password:password}, function(res){
            //res 是本次请求，从服务器回来的数据
            callback(res);
         });
    },
    logout:function(callback){
        $.post(URLIST.uesr_logout,function(res){
            callback(res);
        })
    },
    getInfo:function(callback){
     $.get(URLIST.user_info,function(res){
          callback(res);
     })
    }
}
    
