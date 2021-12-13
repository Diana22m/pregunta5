var  btnCargar  =  documento . getElementById ( "btnCargar" ) ;
var  i ;

btnCargar . addEventListener ( "clic" ,  ( )  =>  {
    axios . obtener ( 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8' )
    . entonces ( función  ( res )  {
        deje  listaJson  =  documento . getElementById ( "listaJson" ) ;
        deje  json  =  res . datos ;
        para  ( yo  en  json )  {
                deje  lista  =  documento . createElement ( "li" ) ;
                lista . innerHTML  =  json [ i ] . nombre  +  "vive en"  +  json [ i ] . ciudad ;
                listaJson . appendChild ( lista ) ;
        }
        consola . log ( json ) ;
    } )
    . catch ( function  ( error )  {
        consola . log ( error )
    } )
} )
