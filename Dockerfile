#use default webbycms image
#FROM webbydnd/webbycms:latest
# or custom webbycms for this image
FROM webbydnd/prototype_ssr_next:latest
ADD build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g "daemon off;" & npm run develop