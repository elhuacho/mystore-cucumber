Feature: Funcionalidad de agregar producto al carrito de compras
  Scenario Outline: Carrito de compras con un producto
    Given Se carga la página de búsqueda
    When Buscamos el término "<term>"
    And Agregamos el producto en el carrito de compras
    Then Se verifica que el carrito muestre "1" producto

    Examples:
      | term |
      | skirt |
      | 1233dd |
      | blouse |