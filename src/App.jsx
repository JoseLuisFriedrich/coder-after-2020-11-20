import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import DetailContainer from './containers/DetailContainer/DetailContainer'
import DetailContainerExtraClass from './containers/DetailContainer/DetailContainerExtraClass'
import HomeContainer from './containers/HomeContainer/HomeContainer'
import HomeContainerExtraClass from './containers/HomeContainer/HomeContainerExtraClass'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path='/:type?'>
            <HomeContainer />
            {/* <HomeContainerExtraClass /> */}
          </Route>
          {/* <Route exact path='/movie'>
            <HomeContainer />
          </Route>
          <Route exact path='/tv'>
            <HomeContainer />
          </Route> */}
          <Route exact path='/:type/:id'>
            <DetailContainer />
            {/* <DetailContainerExtraClass /> */}
          </Route>
        </Switch>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App

// ✔️ Button
// ✔️ Spinner

// ✔️ HomeContainer        '/'
// ✔️      PosterList
// ✔️         Poster
// ✔️ Banner
//
// ✔️ DetailContainer      '/detail/:id'
// ✔️    Detail

// ✔️ NavBar

///////////////////
// SIMIL NETFLIX //
///////////////////

// ✔️ integrar todos los conocimientos adquiridos al momento

////////////
// Repaso //
////////////

// ✔️ organización de contenedores y componentes
// ✔️ props de datos
// ✔️ props de eventos (abstracción)
// ✔️ useState, useEffect con dependencias
// ✔️ fetch a api externa
// ✔️ map
// ✔️ setTimeout
// ✔️ conditional rendering
// ✔️ ternary operator
// ✔️ logical &&
// ✔️ loading

/////////////////////////////////////////////////////////
// Prácticar conocimientos adquiridos la última semana //
/////////////////////////////////////////////////////////

// ✔️ router para redirección
// ✔️ router para filtros
// ✔️ useParams
// ✔️ attach / detach eventos
// ✔️ sessionStorage / localStorage

///////////
// Extra //
///////////

// ✔️ abort rendering promise
// ✔️ customHook usePromiseResolver (versión promise con abort rendering)
// ✔️ customHook usePromiseResolver (versión async/await con abort rendering)
// ✔️ build y deploy

///////////////////
// Prerequisitos //
///////////////////

// ✔️ npm i react-router-dom sass
// ✔️ images/logo_netflix.png
// ✔️ images/spinner.gif

// 00:00:00 00:10:00 ✔️ Consulta de estudiante, se resuelve con:
// 		                   - setProducto(response.find(p => p.id == productoId))
// 		                   - setProducto(response.filter(p => p.id == productoId)[0])
// 00:10:00 00:16:00 ✔️ Descripción de aplicación "simil Netflix"
// 00:16:00 00:25:00 ✔️ Análisis de componentes necesarios para la aplicación
// 00:25:00 00:26:00 ✔️ Spinner component
// 00:27:00 00:33:00 ✔️ Button component (conditional rendering)
// 00:33:00 00:40:00 ✔️ App (BrowserRouter, Switch, Route)
// 00:40:00 00:45:00 ✔️ HomeContainer (useEffect, useState, fetch)
// 00:45:00 00:48:00 ✔️ PosterList (map)
// 00:48:00 01:00:00 ✔️ Poster/Button (Link)
// 01:00:00 01:10:00 ✔️ Banner (truncate)
// 01:10:00 01:17:00 ✔️ DetailContainer (useEffect, useState, fetch)
// 01:17:00 01:23:00 ✔️ Detail (importancia del loading)
// 01:23:00 01:29:00 ✔️ DetailContainer (useParams, useEffect con dependencias)
// 01:29:00 01:43:00 ✔️ NavBar (ternario, operator &&, addEventListener scroll)
// 01:43:00 01:56:00 ✔️ Filtrar información (BrowserRouter, Switch, Route, useParams)
// 01:56:00 02:06:00 ✔️ NavBar (localStorage / sessionStorage)

// Extra Class

// 02:06:00 02:12:00 ✔️ Repaso e importancia de dependencias en useEffect
// 02:12:00 02:17:00 ✔️ Abort Rendering
// 02:17:00 02:19:00 ✔️ Explicación flujo de render de componente
// 02:19:00 02:40:00 ✔️ CustomHook usePromiseResolver con promise
// 02:40:00 02:46:00 ✔️ CustomHook usePromiseResolver con async/await
// 02:46:00 02:50:00 ✔️ Build y deploy de app
