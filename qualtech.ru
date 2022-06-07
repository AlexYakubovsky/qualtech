server {
    server_name qualtech.ru www.qualtech.ru;
    root /home/alexander/qualtech;
    index index.html index.htm index.nginx-debian.html;

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;

    ssl_certificate /etc/letsencrypt/live/qualtech.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/qualtech.ru/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
server {
    server_name qualtech.ru www.qualtech.ru;

  	listen 80;
    listen [::]:80;

    if ($host = www.qualtech.ru) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = qualtech.ru) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot
}
