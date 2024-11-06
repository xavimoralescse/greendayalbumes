
import './App.css';
import Discosgreenday from './componentes/discos';
import { Teneralbumporid, teneralbumporid } from './componentes/contadoralbum';


function App() {
  return (
    <div className="App">
      <h2>Discografia de Green Day</h2>
      <Discosgreenday
      imagen='american_idiot'
      album='Green Day American Idiot'
      descripcion='American Idiot es el séptimo álbum 
      de estudio de la banda estadounidense de rock Green Day. 
      El álbum fue producido por Rob Cavallo y fue lanzado al mercado
       el 21 de septiembre de 2004 por el sello Reprise Records. A mediados de 2003, 
       la banda comenzó la grabación y producción de lo que iba a ser su séptimo álbum titulado 
       igarettes and Valentines. Sin embargo las pistas fueron robadas y la banda decidió volver a 
       empezar de cero, en vez de volver a grabar Cigarettes and Valentines. Más tarde decidieron crear
        una ópera rock, inspirada principalmente en las obras de The Who y numerosos musicales. La historia 
        del álbum cuenta la vida de «Jesus of Suburbia», una especie de antihéroe creado por Billie Joe Armstrong. 
      Gran parte de las canciones del álbum 
      tratan sobre la oposición a la administración Bush, y también de la sociedad estadounidense contemporánea.'
      
      
      />

<Discosgreenday
      imagen='dookie'
      descripcion='Dookie es el tercer álbum de estudio de la banda estadounidense Green Day. 
      El álbum fue la primera colaboración de la banda con Rob Cavallo. Lanzado el 1 de febrero 
      de 1994 bajo el sello Reprise Records en Estados Unidos, Dookie se convirtió en un éxito en todo el mundo, 
      consiguiendo llegar al puesto número dos en el Billboard 200 estadounidense y logrando entrar en las listas de seis países más.

      Fueron extraídos cinco sencillos: «Longview», la regrabada «Welcome to Paradise», «Basket Case», «She» y «When I Come Around». 
      El disco es el más exitoso de Green Day en ventas hasta la fecha con 20 millones de copias vendidas en todo el mundo.3​ Dookie 
      ganó el premio Grammy al mejor álbum de música alternativa en 1995 y es el primer disco álbum de diamante que posee Green Day de 3.'
     album='Green Day Dookie' 
     enlacespotify='https://open.spotify.com/intl-es/album/4uG8q3GPuWHQlRbswMIRS6'
     enlacedeezer='https://www.deezer.com/mx/album/81912'
      
      />
<Discosgreenday
      imagen='21st_century'
      descripcion='21st Century Breakdown —en español: Crisis del siglo XXI— es el octavo álbum de estudio de la 
      banda estadounidense de rock Green Day. Se trata de la segunda ópera rock del grupo, siendo la primera, el 
      álbum anterior American Idiot y es el primero producido por Butch Vig. Green Day comenzó a trabajar en él en enero de 2006. 
      El cantante y guitarrista 
      Billie Joe Armstrong había compuesto 45 canciones hacia octubre de 2007, pero no se comenzó a grabar con Vig hasta enero de 
      2008. El proceso de grabación y composición abarcó tres años y se llevó a cabo en cuatro estudios en California. Finalmente, 
      se terminó en abril de 2009.

El álbum se lanzó el 15 de mayo de 2009 a través de Reprise Records. Armstrong lo describió como «una "fotografía instantánea" 
de la época en la que vivimos, cuestionando y tratando de buscarle sentido a la manipulación egoísta a nuestro alrededor, proveniente 
del gobierno, la religión, los medios o francamente cualquier forma de autoridad».1​ Los sencillos «Know Your Enemy» y «21 Guns» son ejemplos 
de la temática de alienación e indignación ante los políticos presente en el disco.'
     album='Green Day 21St Century Breakdown' 
     enlacespotify='https://open.spotify.com/intl-es/album/4uG8q3GPuWHQlRbswMIRS6'
     enlacedeezer='https://www.deezer.com/mx/album/81912'
      
      />

    <Teneralbumporid/>

    </div>




  );
}

export default App;
