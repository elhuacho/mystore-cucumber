Feature: Funcionalidad de agregar producto al carrito de compras
  Scenario: Carrito de compras con un producto
    Given Se carga la página de búsqueda
    When Buscamos el término "skirt"
    And Agregamos el producto en el carrito de compras
    Then Se verifica que el carrito muestre "1" producto
