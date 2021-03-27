<html>
  <head>
    <meta charset="utf-8">
    <title><%= fontName %></title>
    <link href="css/<%= fontCssName %>.css" rel="stylesheet">
    <style>
      body { font-family: Gill Sans; text-align: center; background: #f7f7f7 }
      body > h1 { color: #333; margin: 1em 0 }
      .icon-wrap { padding: 0;text-align: left; }
      .icon-wrap > li { display: inline-block; margin: .3em .2em; width: 6em; height: 6.5em; background: #fff; border-radius: .5em; position: relative ;padding:10px;text-align:center; vertical-align: middle;}
      .tw591-icon{font-size: 42px;color: #333;}
      .icon-name {color: #333; display: block;margin-top:10px}
      .icon-codepoint { color: #999; font-family: monospace; display: none; }
    </style>
  </head>
  <body>
    <h1><%= fontName %></h1>
    <ul class="icon-wrap"><% _.each(glyphs, function(glyph) { %>
      <li>
        <span class="tw591-icon <%= className %>-<%= glyph.name %>"></span>
        <span class="icon-name"><%= className %>-<%= glyph.name %></span>
        <span class="icon-codepoint"><%= glyph.codepoint.toString(16).toUpperCase() %></span>
      </li><% }); %>
    </ul>
    <script>
        /**
        *复制文案到剪切板
        */
        const copyToClipboard = (value) => {
            const textarea = document.createElement('textarea');
            textarea.value = value;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('成功复制' + value + '到剪切板！');
        }
        var li = document.getElementsByTagName('li');
        for(var i=0; i< li.length; i++){
            li[i].onclick = function(){
                console.log(this.firstElementChild.classList[1]);
                var iconName = this.firstElementChild.classList[1]
                copyToClipboard(iconName)
            }
        }
    </script>
  </body>
</html>
