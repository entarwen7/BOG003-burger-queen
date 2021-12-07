# Aquelarre-BurgerQuen
***

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Prototipo](#2-Prototipo)
* [3. Requerimientos del proyecto](#3-Requerimientos-del-proyecto)
* [4. Producto final](#4-Producto-final)
* [5. Lenguajes,framework y herramientas](#5-Lenguajes,-framework-y-herramientas)

***
![](https://i.imgur.com/EOPcdti.png)

### 1. Preámbulo

Aquelarre es una aplicación web SPA, desarrollada con el framework Angular, que se actualiza a tiempo real gracias a su integración con Firebase, lo cual le permite a un restaurante tomar ordenes desde una tablet y comunicar a los meseros con la cocina de forma ágil y sencilla.

Permitiendole al usuario escoger el rol que le corresponda entre mesero o chef. Al ingresar a vista del rol seleccionado, en este caso mesero, podra digitar el nombre del ciente, la mesa y tomar el pedido según el menú de desayuno o almuerzo, para enviarlo a cocina e iniciar el proceso de preparación.

En el caso de la vista del chef, este podra observar los pedidos por orden de llegada y seleccionar con el botón preparar para indicar en la barra de estado el progreso al mesero; y cuando ya este preparada la orden, con ayuda del botón entregar pasara a estar culminada, indicando que el proceso en cocina finalizó.

Por último el mesero recibe el pedido y al entregarlo al comensal, debe oprimir el botón de entregar, con el cual se para el cronometro, que ayuda a observar cuanto tiempo toma en prepararse una orden desde que se toma; así logrando optimizar el proceso y para ello cada pedido queda consiganado en la vista de historial de ordenes.

## 2. Prototipos

### Prototipo:`Baja Fidelidad`
A continuación se visualizan las pantallas correspondientes a los prototipos de baja fidelidad, estos fueron hechos con ayuda de la herramienta Balsamiq
#### Pantalla de bienvenida
Decidimos crear prototipos sencillos y amigables basandonos en los requerimientos del cliente, esto con el fin de facilitar su uso por parte del usuario final.
![Pantalla de bienvenida](https://i.imgur.com/MQXN5xG.png)
#### Vista del mesero: menú desayuno `Diseño de las tarjetas y resumen del pedido`
![Diseño de las tarjetas y resumen del pedido](https://i.imgur.com/QLZJlZ3.png)
#### Vista del mesero: menú almuerzo.
![](https://i.imgur.com/ZePmfDX.png)

#### Modal de adicionales para hamburguesas
![](https://i.imgur.com/CpOAwlb.png)
#### Barra de estado mesero
![](https://i.imgur.com/ByyJfwC.png)
#### Vista Jefe de cocina - ordenes pendientes
![](https://i.imgur.com/zb6FjJW.png)Y
#### Jefe de cocina - Ordenes terminadas
![](https://i.imgur.com/FZ2c5Pb.png)


### Prototipo: `Alta Fidelidad`

#### Paleta de colores
![paleta de colores](https://i.imgur.com/mXDE4oW.png)

#### Primeras vistas 
Vista inicial de la página y  sección de desayuno para primera vista de mesero

![primeras dos vistas](https://i.imgur.com/z90cWTk.png)

#### vista de mesero
 Sección de almurzo y modal para eleccion de tipo de hamburguesa y adicionales.
 
![vista 2 y modal](https://i.imgur.com/1uwavG6.png)

#### Vista de ordenes en proceso `Mesero,chef`

![ordenes en proceso chef y mesero](https://i.imgur.com/6eyjxGl.png)
 
 #### Historial de ordenes
![historial](https://i.imgur.com/xnZs3Qs.png)

### 3. Requerimientos del proyecto
  #### `Historia de usuario 1`
 
  ##### Criterios de aceptación
  * Anotar nombre de cliente.
  * Agregar productos al pedido.
  * Eliminar productos.
  * Ver resumen y el total de la compra.
  * Enviar pedido a cocina (guardar en alguna base de datos).
  * Se ve y funciona bien en una tablet.
  * 
  #### `Historia de usuario 2`
  
   ##### Criterios de aceptación
  * Ver los pedidos ordenados según se van haciendo.
  * Marcar los pedidos que se han preparado y están     listos para servirse.
  * Ver el tiempo que tomó prepara el pedido desde 
  * que llegó hasta que se marcó como completado.
  #### `Historia de usuario 3`
  
   ##### Criterios de aceptación
  * Ver listado de pedido listos para servir.
  * Marcar pedidos que han sido entregados.

### 4. Producto final

La aplicación Aquelarre es una SPA desarrollada con el fin de dar respuesta a la necesidad del restaurante Burger Queen.

A continuación se muestra el producto final según los criterios de aceptación del cliente:

#### Vista principal o pantalla de inicio
![](https://i.imgur.com/5URkQku.png)
#### Sección del mesero
![](https://i.imgur.com/LKqscTJ.png)
![](https://i.imgur.com/sKbhB7M.png)
![](https://i.imgur.com/NCj1FU8.png)
#### Sección de Ordenes por entregar
![](https://i.imgur.com/e3AvGX3.png)
#### Sección Historial de ordenes
![](https://i.imgur.com/PSXRxhL.png)
#### Sección Chef ordenes
![](https://i.imgur.com/QaA4N9H.png)
#### Sección ordenes listas
![](https://i.imgur.com/wOHSbws.png)

### 5. Lenguajes,framework y herramientas

* Para el desarrollo de este proyecto se utilizó el framework [angular](https://angular.io/) el cual nos permitió crear una SPA. De este framework aprendimos a usar los componentes y la comunicación entre componentes, input y output, directivas, ngIf, ngFor, ngClass etc, clases, servicios, observables entre otros.

* Para los estilos de la aplicación se utilizó el framework de diseño [materialize](https://materializecss.com/) el cual permite integrar diferentes formas de Css como tablas, tarjetas, navbar con sus estilos ya incluidos.

* Para realizar el prototipo de baja fidelidad utilizamos la herramienta [balsamiq](https://balsamiq.cloud/) y para los prototipos de alta fidelidad usamos [figma](https://www.figma.com)

* Se uso [firestore](https://firebase.google.com/) como herramienta para guardar los datos de los pedidos, esto ademas nos permitio realizar la actualización de las ordenes en tiempo real y mostrarlos en la aplicación mediante el método onSnapShot y los observables de angular.