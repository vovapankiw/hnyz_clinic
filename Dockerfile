
FROM trion/ng-cli as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci  --debug 
COPY . .
RUN npm run build


FROM nginx:1.17.5

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder  /app/dist/clinic/server /usr/share/nginx/html
COPY --from=builder  /app/dist/clinic/browser /usr/share/nginx/html/browser 

RUN ls '/usr/share/nginx/html'
RUN cat '/usr/share/nginx/html/index.html'
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;' && node '/usr/share/nginx/html/main.js'