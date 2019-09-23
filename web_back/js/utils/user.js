var user={
    login:function(userName,password,callback){
        // alert('login');
        $.post(URLIST.user_login,{user_name:userName,password:password}, function(res){
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
    
