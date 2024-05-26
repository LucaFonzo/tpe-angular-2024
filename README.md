# TpeAngular2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Datos
Luca Fonzo 45224584 lucafonzo3110@gmail.com Tandil
## Tema
Para este proyecto se eligio la tematica de un e-commerce en la que se pueden agregar productos a un carrito y se puede navegar entre
dos paginas home y about.  
Ruteo: Para el punto de ruteo se enruto en el header dos paginas home y about  
Componentes: Para este punto se creo en la pagina home un componente que lleva la estrucutura del listado de productos y el componente del header  
Interfaces: Para el uso de una interfaz se creo la de Producto.  
Directivas o Control de Flujo:Para las directivas se utilizo un @for para mostrar el listado de productos que contiene un array en el componente y para @if dentro del mismo @for para productos se agrego que si uno de los productos no tuviera una imagen se agregue una por defecto  

Comunicación entre Componentes:Para la comunicacion entre componentes se utilizo un servicio que lleva el listado del carrito de compras,
este comunica al header con el listado de productos cuando se quiere agregar un producto.  
Servicios:Se utilizo un servicio para consumir una API y otro para comunicar entre componentes  
