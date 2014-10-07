# variword

See `example.html` for quick usage, or read on.

## Usage

First, download [variword.css](variword.css) and [variword.js](variword.js) and include them in your project.

HTML structure:

```html
<div class="variword-sentence">
	<span>OPTIONAL CONTENT BEFORE</span>
	<div class="list">
		<ul>
			<li>WORD 1</li>
			<li>WORD 2</li>
			<li>WORD 3</li>
		</ul>
	</div>
	<span>OPTIONAL CONTENT AFTER</span>
</div>
```

JS:

```javascript
$('.variword-sentence .list').variword();
```
