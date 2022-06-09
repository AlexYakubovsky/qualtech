server {
    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot

    server_name qualtech.ru www.qualtech.ru;
    root /var/www/qualtech;
    # index index.html index.htm index.nginx-debian.html;

    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://localhost:3000;
    }

    ssl_certificate /etc/letsencrypt/live/qualtech.ru/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/qualtech.ru/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    listen 80;
    listen [::]:80;

    server_name qualtech.ru www.qualtech.ru;

    if ($host = www.qualtech.ru) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = qualtech.ru) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot

}
