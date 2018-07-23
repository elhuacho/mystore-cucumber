$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Funcionalidad de agregar producto al carrito de compras",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3633706731,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Carrito de compras con un producto",
  "description": "",
  "id": "funcionalidad-de-agregar-producto-al-carrito-de-compras;carrito-de-compras-con-un-producto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Se carga la página de búsqueda",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Buscamos el término \"skirt\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Agregamos el producto en el carrito de compras",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Se verifica que el carrito muestre \"1\" producto",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.seCargaLaPáginaDeBúsqueda()"
});
formatter.result({
  "duration": 5765661661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skirt",
      "offset": 21
    }
  ],
  "location": "Search.buscamosElTérmino(String)"
});
formatter.result({
  "duration": 1635950434,
  "status": "passed"
});
formatter.match({
  "location": "Search.agregarElProductoEnElCarritoDeCompras()"
});
formatter.result({
  "duration": 823886841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Search.seVerificaQueElCarritoMuestreProducto(String)"
});
formatter.result({
  "duration": 99065635,
  "status": "passed"
});
formatter.after({
  "duration": 915372621,
  "status": "passed"
});
});