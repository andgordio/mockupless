# Background styles

## Color

Basic value:
```css
background-color: #FF4949;
```
Alternative values:
```css
background-color: rgba(255, 73, 73, 1);   // rgba value
background-color: red;                    // named value
background-color: transparent;            // no background
```

#### Tailwind classes
A combination of `bg-` prefix and a color:
```html
<div class="bg-pink-lightest"></div>      // named value
<div class="bg-pink-transparent"></div>   // no background
```

See Tailwind [Colors](https://tailwindcss.com/docs/colors) and [Background Color](https://tailwindcss.com/docs/background-color) for reference

## Image

### Location
Basic value
```css
background-image: url('http://unsplash.com/beach.jpg');
```
Relative value. Should not be a popular choice when prototyping be
```css
background-image: url('beach.jpg');
```

### Position
```css
background-position: top center;
background-position: top 25% right 25%;
```

### Repeat
```css
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: no-repeat;
```

### Size
```css
background-size: 200px;
background-size: cover;
```

### Shortcut value
```css
background: top center / cover no-repeat #FF4949 url('http://unsplash.com/beach.jpg');
```