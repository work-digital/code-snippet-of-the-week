# Css Layers

## Introduction

CSS stands for cascading style sheets. The cascade is the order in which styles are applied to an element, while the lower styles override the higher styles.

1. user agent styles => usually the styles the browser has set
2. user styles => usually the styles the user has set
3. author styles => usually the styles we write

Css layers are basically a way to split up the `author styles` into different layers. This is done to make the code more maintainable and easier to work with. However, I think it also comes with potential downside if important is used in the wrong way.

Split your author styles into different layers, for example:

1. Base styles
2. Components styles

## Resources

-   https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/
-   https://www.youtube.com/watch?v=NDNRGW-_1EE
