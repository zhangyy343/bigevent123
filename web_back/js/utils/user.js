var user={
    login:function(userName,password,callback){
        // alert('login');
        $.post('http://localhost:8000/admin/login',{user_name:userName,password:password}, function(res){
            callback(res);
        }
        )}
    }
