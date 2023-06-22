_cache_get_all("*")!
VAR_CACHE_LIST = JSON.parse(_result())     //获取缓存
var list_header = [[CACHE_LIST]][0]["request_headers"]; //获取headers
var list_cookie =new Array();           //格式化header
for(var i=0;i<list_header.length;i++)
{
    var list_line = list_header[i];
    var line = list_line.join(": ");
    list_cookie.push(line);
}
[[HEADER]]=list_cookie.join("\n");

save_cookies()!  //导入浏览器cookie
_switch_http_client_main()
http_client_restore_cookies(JSON.stringify({cookies:JSON.parse(_result())}))
