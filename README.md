# DESAFIO NTT DATA

NTT DATA CHALLENGE es una prueba técnica que evalúa los conocimientos de la persona. Siguiendo las instrucciones; El solicitante de empleo debe crear una pagina donde se muestre la informacion que le brinda una API. El problema está estructurado para que el solicitante lo resuelva en el lenguaje de programación de su elección.

![image](https://github.com/Brunosz19/Desafio-NTT-Data/assets/103700965/ef7ec858-ef03-4c2a-ba0a-fb8ea2e2fa5d)


## Instalación
Clona el repositorio con las herramientas que te da GitHub.

![image](https://github.com/Brunosz19/Desafio-NTT-Data/assets/103700965/42489153-51bd-4f0f-9a01-2f71caf85c1b)

Dentro de la consola con el archivo abierto, usa el manejador de paquetes [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) para instalar le aplicacion de mi "Desafio NTT Data".

```bash
npm install
```

## Uso

Tras el paso anterior de la instalación, para acceder a la aplicación Next.js y poder ver lo conseguido hasta el momento, tendríamos que teclear el siguiente código en la consola.

```bash
yarn dev
```
o tambien podrias intentar con:

```bash
npm run dev
```

## Explicacion con Imagenes

Para mencionar más sobre esta aplicación, usaré algunas imágenes para mencionar algún código y explicar cuál es el uso de la aplicación Next.js que hice para resolver el desafío.
En esta aplicación Next.js, se usó getServerSideProps como metodo fetch para obtener los datos de la API y poder mostrarlos segun donde los necesite.

![image](https://github.com/Brunosz19/Desafio-NTT-Data/assets/103700965/83ae28a3-82f7-4122-a174-63fdc62496d0)

Se utilizó la etiqueta <Table> para crear la tabla con la información. Este tenía que tener los datos para el encabezado y administrar el resto del cuerpo con una iteración de la matriz que me da la respuesta de la API ("data.result").

![image](https://github.com/Brunosz19/Desafio-NTT-Data/assets/103700965/a7e213f8-43e0-4362-98b4-263ebe40b9fb)

Finalmente, este se imprime en la tabla, con los datos que manejamos anteriormente.

![image](https://github.com/Brunosz19/Desafio-NTT-Data/assets/103700965/b768594b-63e8-45c0-8002-364bf78b4d67)

## Author
[Bruno Saenz](https://github.com/Brunosz19)
