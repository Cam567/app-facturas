FROM nginx:1.21.3

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/app-facturas /usr/share/nginx/html
