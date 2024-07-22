FROM nginx
COPY index.html /usr/share/nginx/html/
COPY resources/. /usr/share/nginx/html/static/
