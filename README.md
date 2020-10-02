# Gallery App

Aplicación que consulta un [api de imágenes](https://picsum.photos/v2/list
) y se muestran en forma de galería en un dispositivo móvil.

## Installation

Al descargar el proyecto debe hacer
```bash
yarn install
```

## Run Project

Para correr el proyecto con los siguientes comandos

 * Para ios:

```python
yarn ios
```

* Para android:
```python
yarn android
```

## Mejoras
Ya que este es un test me gustaría mejorar lo siguiente:

* Le haría uni test.
* Sacaría los estilos inline y los haría en una hoja de estilos aparte con su StyleShet.create({})
* Implementar Storybook para visualización de componentes.
* Sacaría librería de estilos.
* Mejoraría la parte de llamar al api y la pondría en una carpeta /services.
* Implementaría babel, eslint, prettier (Custom).
* Crearía variables globales para colores, url, etc...
* cambiaría el nombre de los distintos headers a español.
* Colocaría I18n cómo translate.
* Se que se me escapan algunas cosas pero creo que se cubre lo básico.