# WordPress Development Toolbox for Visual Code

[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![Installs](https://marketplace.visualstudio.com/items?itemName=closemarketing.wp-development-toolbox.svg)](https://marketplace.visualstudio.com/items?itemName=closemarketing.wp-development-toolbox)
[![Badge for version for Visual Studio Code extension closemarketing.wp-development-toolbox](https://marketplace.visualstudio.com/items?itemName=closemarketing.wp-development-toolbox.svg)](https://marketplace.visualstudio.com/items?itemName=closemarketing.wp-development-toolbox)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/closemarketing/wp-development-toolbox/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/closemarketing/wp-development-toolbox.svg)](https://GitHub.com/closemarketing/wp-development-toolbox/graphs/contributors/)

## Introduction

This Toolbox helps you to develop in WordPress very fast. It has a lot of snippets for a lot of situations. 

The sintaxis of the snippets is:
2-3 digits - Environment as WordPress and Plugins.
1 - Action: A - Adding, R - Remove, M - Move, T - Setup a setting, S - Show HTML
2-3 Name of snippet

For example: 
metafun - Met is for plugin Metabox, A for adding a function and Fun is the name of the snippet. 

All snippets will respect WordPress Standards. 

## List of Snippets

## WordPress (WP) ##
| **Regla**		| **Significado**	|
| ------------------- |------------------------------------------------------------------|
| **wpaac**		| Añade la accion en functions con función incluida
| **wpaex**		| Añade soporte de extractos en páginas
| **wpstitbr**	| Inserta un br en la primera palabra del título
| **wpsgf**		| Muestra un formulario Gravity Forms
| **wprcomurl**	| Deshabilita la URL en comentarios
| **wpsgmt**	| Muestra meta valor
| **wpajs**		| Contenedor JavaScript para WordPress
| **wpstit**	| Muestra el título y su enlace de un post
| **wpscm**		| Muestra menú páginas hijas
| **wpstxt**	| Muestra los términos de una taxonomía en un post
| ** ** |
| **Querys** 	|
| **wpqgen** 	| Query completo para Genesis
| **wpquery**	| Query completo
| **wpqtm** 	| Query para mostrar términos de una taxonomía
| **wpqda** 	| Argumentos Query con un meta valor tipo fecha
| **wpqta** 	| Argumentos Query para una taxonomía


## WordPress Funciones internas (WP) ##
| **Regla**               | **Significado**     |
| ------------------- |------------------------------------------------------------------|
| **wpaclass**	| Añade una clase tipo para WordPress con carga
| **wpastyl** 	| Para carga directory tema
| **wpcv** 		| Plantilla WP Config producción
| **wploc**		| Plantilla WP Config local
| **wpaev** 	| Muestra un texto para multidioma versión dentro de echo
| **wpae** 		| Muestra un texto para multidioma
| **wpinc** 	| Incluye un archivo en plugin o en tema
| **wpagpm** 	| Recoge el valor de un meta valor
| **wpupdatemeta**| Rutina para actualizar meta valores
| **wpaddexc** 	| Añade soporte extracto a páginas
| ** ** |
| **Facebook** |
| **wpafb** 	| Añade Facebook Pixel
| **wpafbc** 	| Añade Facebook Pixel para conversiones
| ** ** |
| **Widgets** |
| **wpwidget** 	| Estructura completa de un widget
| **wpwf** 		| Cambia before_widget para que sea ancho completo
| **wpwpag** 	| Recoge todas las páginas para mostrarlo en opciones widget
| ** ** |
| **Post2Posts** |
| **wpap2p** 	| Función registro post2posts
| **wpsp2p** 	|  Muestra entradas relacionadas
| ** ** |
| **Plugins** |
| **wpphead** 	| Plantilla Cabecera para un plugin
| ** ** |
| **Post Types** |
| **wpcptpag** | Crea un Post Type tipo página
| **wpcptpost** | Crea un Post Type tipo entrada
| **wpcptcol** | Añade columnas en el post type del admin
| **wpatax** | Añade una taxonomía para un post type
| **wpataxcpt** | Añade una taxonomía para un post type ya creado
| **WPO** | (no utilizar si el tema es nuestro)
| **wprdash** | Quita carga dashicons
| **wprem** | Elimina versiones en los estilos

## WordPress Otras ##
| **Regla**               | **Significado**     |
| ------------------- |------------------------------------------------------------------|
| **wpssoc** | Muestra iconos Font Awesome de Redes sociales (url de Yoast)
| **gfavib** | Habilita opción Visibilidad en GravityForms
| **hts** | htaccess recomendado con SSL

## Genesis (GEN) ##
| **Regla**			| **Significado**	|
| ------------------- |------------------------------------------------------------------|
| **Additions** 		|
| **genaclass** 		| Adds classes and elements to HTML element

| **Shows to public** 	|
| **gensmsoc** | Adds social icons to main menu


## WooCommerce (WOO) ##
| **Regla**               | **Significado**     |
| ------------------- |------------------------------------------------------------------|
| **wootacc** | Creación de cuenta marcada por defecto
| **wootbre** | Cambia las migas de pan después de la descripción del producto
| **wootchc** | Cambia el texto del botón del carrito
| **wootquan** | Establece la cantidad por defecto
| **woorprivar** | Elimina el rango precios en producto variable
| **woorbut** | Elimina leer más en productos sin stock
| **woorsd** | Elimina la descripción corta
| **woorpdes** | Elimina el título Descripcion en la pestaña descripción
| **worst** | Elimina el texto de stock
| **woomdes** | Mueve la descripción después del precio

## Download Monitor ##
| **Regla**               | **Significado**     |
| ------------------- |------------------------------------------------------------------|
| **dmhsty** | Simplifica el admin del plugin
| **dmsbut** | Plantilla botón
| **dmsbox** | Plantilla Caja

### Metabox WordPress Post Types (MET) ###
| **Rule**		|	**Action**     |
| ------------------- |------------------------------------------------------------------|
| **metafun**	|	Adds Metabox Function 
| **metatext**	| 	Adds text field
| **metagal**	| 	Adds Images Gallery Field
| **metaicon**	| 	Adds Icon field
| **metasel**	| 	Adds select field
| **metadir**	| 	Adds Address field
| **metafor**	| 	Get Select Field of actual Forms in Gravity Forms
| **metsimg**	| 	Shows Gallery in public page

### WPML (WPML) ###
| **Regla**			  | **Significado**	|
| ------------------- |------------------------------------------------------------------|
| **wpmlsup** | Añade para WP Query Suppress filters
| **wpmllang** | Constante del actual idioma activo
| **wpmldis** | Desactiva JS y CSS en functions
| **wpmlalink** | Enlace de un post ID en el idioma actual


### CSS (CSS) ###
| **Rule** | **Action** |
| ------------------- |------------------------------------------------------------------|
| **csswidget** | Añade una sección widget en CSS

___

Syntaxis:
* 2-3 primeros dígitos nombre plugin/software
* a -> añadir
* s -> mostrar
* r -> eliminar
* t -> establece
