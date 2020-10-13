function base_setWallpaperPath(){
    var setWallpaperPathIndex = layer.open({
        id: 'setWallpaperPath',
        anim: 0,
        type: 2,
        scrollbar: false,
        offset: 'rt',//坐标
        // area: ['200', '100%'],//宽高
        area: ['80%', '80%'],//宽高
        title: '<span>设置背景</span>',
        closeBtn: 1,
        shade: [0.01, 'white'],
        shadeClose: true,
        skin: 'layui-layer-myClass',
        btn: ['保存设置', '关闭'], //可以无限个按钮
        btnAlign: 'c',
        content: ['/setting', 'no'], 
        // content: ['./_layer_addTodo', 'no'], 
        //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
        yes: function (index, layero) {
            // layer.msg("我点了确认");
            // 保存背景
            // var body = layer.getChildFrame('body', setWallpaperPathIndex);
            // var iframeWin = window[layero.find('iframe')[0]['name']]; 
            // 得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
            // iframeWin.submitFormByAdd();
        } ,btn2: function(index, layero){
            // layer.msg("我点了取消");
            //还原背景
          },cancel: function(){
            // layer.msg("我点了关闭");
            //还原背景
        }
    }); 
}

//首页面方法，在中间位置打开指定页面
function base_indexOpenPage(url){
    // $("#content_center__id").attr("src","");
    // $("#content_center__id").attr("src",url);
    // $("#content_center_div_id").attr("style","");
}

//关闭中间弹出层
function base_close_center_iframe(){
    $(window.parent.document).find("#content_center_div_id").attr("style","display:none;");
}
//子页面修改中间区域iframe高度，达到自适应效果。
function base_changeCenterIframeHeight(){
    var documentHeight = $(document).height();
    $(window.parent.document).find("#content_center__id").css("height",""+documentHeight+"px");
}
/**  

base_setWallpaperPath       //设置背景通用功能
base_indexOpenPage              //首页面方法，在中间位置打开指定页面

 */