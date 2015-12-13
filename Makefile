
js:
	webpack app/js/app.jsx app/js/app.js

css:
	sass app/css/main.scss:app/css/main.css

dist: css js

dev:
	sass --watch app/css/main.scss:app/css/main.css &
	python -m SimpleHTTPServer app/