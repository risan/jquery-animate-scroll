# jQuery Animate Scroll

[![Build Status](https://img.shields.io/travis/risan/jquery-animate-scroll.svg?style=flat-square)](https://travis-ci.org/risan/jquery-animate-scroll)
[![Latest Version](https://img.shields.io/npm/v/jquery-animate-scroll.svg?style=flat-square)](https://www.npmjs.com/package/jquery-animate-scroll)
[![License](https://img.shields.io/npm/l/jquery-animate-scroll.svg?style=flat-square)](https://www.npmjs.com/package/jquery-animate-scroll)

This is jQuery plugin which allow you to have a smooth page scrolling effect by animating it.

## Table of contents

* [Dependency](#dependency)
* [Installation](#installation)
  * [Install Using NPM](#install-using-npm)
  * [Install Using Bower](#install-using-bower)
  * [Install Using Git](#download-using-git)
  * [Manual Download](#manual-download)
* [Usage](#usage)
  * [Using $(selector).animateScroll( options )](#using-selectoranimatescroll-options-)
  * [Using $.scrollTo( $target, options )](#using-scrollto-target-options-)
  * [Using $(selector).scrollHere( options )](#using-selectorscrollhere-options-)

## Dependency

This plugin has the following dependency:

- jQuery >= 1.3

## Installation

There are four different ways to install or download this jQuery plugin.

### Install Using NPM

You can install this jQuery plugin using [NPM](https://www.npmjs.com/). Simply run the following command inside your project directory.

```bash
npm install jquery-animate-scroll --save
```

Or you may add `jquery-animate-scroll` to your `package.json` dependencies:

```json
{
  "dependencies": {
    "jquery-animate-scroll": "~1.0.0"
  }
}
```

Then run install command:

```bash
npm install
```

### Install Using Bower

You may also install this jQuery plugin by leveraging [Bower](http://bower.io/) package. Run the following command to install this plugin:

```bash
bower install jquery-animate-scroll --save
```

You may also add this `jquery-animate-scroll` package to your `bower.json` file like so:

```json
{
  "dependencies": {
    "jquery-animate-scroll": "*"
  }
}
```

### Download Using Git

Another option to install this jQuery plugin is by using git command. Simply clone this repository by running the following command:

```bash
git clone https://github.com/risan/jquery-animate-scroll.git
```

Or if you prefer using ssh:

```bash
git clone git@github.com:risan/jquery-animate-scroll.git
```

### Manual Download

You can also install this plugin by simply downloading it from:

[jquery.animate-scroll.js](https://raw.githubusercontent.com/risan/jquery-animate-scroll/master/dist/jquery.animate-scroll.js)

Or if you prefer the minimized version:

[jquery.animate-scroll.min.js](https://raw.githubusercontent.com/risan/jquery-animate-scroll/master/dist/jquery.animate-scroll.min.js)

## Usage

There are numbers of way to use this plugin:

- `$(selector).animateScroll( options )`
- `$.scrollTo( $target, options )`
- `$(selector).scrollHere( options )`

And each of these methods has the same options:

- `$container` is an element that has the scroll, default: `$(html,body)`
- `speed` is the duration to perform the scroll animation in milliseconds, default: 400
- `offset` is the offset in pixels, default: 0

### Using `$(selector).animateScroll( options )`

For example you have the following markup on your page:

```html
<a href="#article-1">Go To Article One</a>

...

<h1 id="article-1">Article One</h1>
```

Now to turn the anchor have an animated scroll effect, add the following line inside your javacript code:

```js
$('a').animateScroll();
```

The above code will initialize the animate scroll plugin. You may also pass some options like this:

```js
$('a').animateScroll({
  $container: $('body'),
  speed: 1000,
  offset: -100
});
```

You may also set `speed` and `offset` options using HTML data attribute like so:

```html
<a href="#article-1" data-speed="1000" data-offset="-100">Go To Article One</a>
```

You may check the demo file: [demo/animate-scroll.html](https://github.com/risan/jquery-animate-scroll/blob/master/demo/animate-scroll.html)

### Using `$.scrollTo( $target, options )`

Now to use the `$.scrollTo( $target, options )`, consider we have the following HTML markup:

```html
<a href="#" id="link-1">Go To Article One</a>

...

<h1 id="article-1">Article One</h1>
```

To turn the anchor to have an animated scroll, use the following code:

```js
$('#link-1').click(function( e ) {
  // Prevent default behaviour.
  e.preventDefault();

  // Scroll to article one.
  $.scrollTo( $('#article-1') );
});
```

You may also pass the options like so:

```js
$.scrollTo( $('#article-1'), {
  $container: $('body'),
  speed: 1000,
  offset: -100
});
```

You may check the demo file: [demo/scroll-to.html](https://github.com/risan/jquery-animate-scroll/blob/master/demo/scroll-to.html)

### Using `$(selector).scrollHere( options )`

And the last method you may use is the `$(selector).scrollHere( options )`. For example, consider you have the following HTML markup on your page:

```html
<a href="#" id="link-1">Go To Article One</a>

...

<h1 id="article-1">Article One</h1>
```

To activate the animated scroll, here is the sample code:

```js
$('#link-1').click(function( e ) {
  // Prevent default behaviour.
  e.preventDefault();

  // Scroll to article one.
  $('#article-1').scrollHere();
});
```

To pass the options, you can do it like this:

```js
$('#article-1').scrollHere({
  $container: $('body'),
  speed: 1000,
  offset: -100
});
```

You may check the demo file: [demo/scroll-here.html](https://github.com/risan/jquery-animate-scroll/blob/master/demo/scroll-here.html)
