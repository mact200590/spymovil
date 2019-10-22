# Instalación del proyecto:

Estamos tomando como premisas que ya usted tiene el proyecto clonado localmente, además tiene instalado `yarn` and `node 12.11.0` .
(https://yarnpkg.com/lang/en/docs/install/)
(https://nodejs.dev/how-to-install-nodejs)

## Paso 1:

ejecutar el comando

`yarn`

## Paso 2

ejecutar el comando
`yarn setup`
este creará un archivo `.env` con un prototipo de las variables de entornos necesarias en el proyecto.

## Paso 3

Agregarles los valores correctos a las variables de entorno en `.env`
Debe ponerse en contacto con el admin para más información

## Paso 4

`yarn dev`

este último comando inicia tu proyecto corriendo localmente



# Stack


Se usó react por ser muy potente para el desarrollo de interfaz de usuario y no atarnos a ninguna librería en específico, se puede ser libre de utilizar las que se necesite según las necesidades.

 Como sistema de diseño se usó material ui, el cual tiene una forma correcta de vincular patrones de diseño en una aplicación, además de ciertos componentes personalizables y reutilizables

No fué necesario usar ninguna tecnología para mantener el estado global, el proyecto no lo ameritaba, pero se queda abierto para poder usar redux por ejemplo.
Usamos hooks, es una enorme ventaja en react, podemos compartir lógica de estado y así hacer nuestro código más entendible.
