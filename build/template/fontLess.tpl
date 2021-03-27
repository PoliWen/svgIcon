/* stylelint-disable selector-pseudo-element-colon-notation */
@font-face {
  font-weight: normal;
  font-family: '<%= fontName %>';
  font-style: normal;
  font-display: auto;
  src: url('../fonts/<%= cssClass %>.woff2') format('woff2'),
    url('../fonts/<%= cssClass %>.woff') format('woff'),
    url('../fonts/<%= cssClass %>.ttf') format('truetype');
}

.tw591-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "<%= fontName %>";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-size:16px;
  &::before {
    display: inline-block;
  }
}

<% _.each(glyphs, function(glyph) { %>.icon-<%= glyph.fileName %>:before {
  content: "\<%= glyph.codePoint %>";
}

<% }); %>