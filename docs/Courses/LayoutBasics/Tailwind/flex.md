# Flex

## display: flex

Turning a regular container into a flex container is a matter of adding `flex` class to it:

```html
<div class="flex"></div>
```

## Direction

```html
<div class="flex flex-row"></div>           <!--default-->
<div class="flex flex-row-reverse"></div>
<div class="flex flex-col"></div>
<div class="flex flex-col-reverse"></div>
```

## Wrap

```html
<div class="flex flex-no-wrap"></div>       <!--default-->
<div class="flex flex-wrap"></div>
<div class="flex flex-wrap-reverse"></div>
```

## Alignment

### align-items

```html
<div class="flex items-stretch"></div>       <!--default-->
<div class="flex items-start"></div>
<div class="flex items-center"></div>
<div class="flex items-end"></div>
<div class="flex items-baseline"></div>
```

### justify-content

```html
<div class="flex justify-start"></div>       <!--default-->
<div class="flex justify-center"></div>
<div class="flex justify-end"></div>
<div class="flex justify-between"></div>
<div class="flex justify-around"></div>
```

## flex: 1

```html
<div class="flex">
  <div class="flex-1"></div>
</div>
```