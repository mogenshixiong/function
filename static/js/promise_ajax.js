function error(error){

}
//异步获取服务器cpu使用率
function getServerCpu(){
    return new Promise(function(resolve, reject) {
        // ... some code
        $.ajax({
            type: 'POST',
            url: '/getServerCpu',
            data: {},
            success: function (data) {
                if(data.code == 1){
                    resolve(data);
                }else{
                    reject('error');
                }
            }
        });
    });
}