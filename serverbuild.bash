sudo apt update && sudo apt upgrade -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
sed -i 's/\[ -z "$PS1" \] && return/#&/' ~/.bashrc
source ~/.bashrc
nvm install 20
npm install -g pnpm
pnpm setup
source ~/.bashrc
pnpm install -g pm2
sudo apt install nginx -y
sudo tee /etc/nginx/sites-available/ripplesftc.com > /dev/null <<EOF
server {
    listen 80;
    server_name ripplesftc.com www.ripplesftc.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
sudo ln -s /etc/nginx/sites-available/ripplesftc.com /etc/nginx/sites-enabled/
sudo nginx -t 
sudo systemctl restart nginx 
sudo ufw allow 'Nginx Full' # Allows both HTTP and HTTPS traffic
sudo ufw allow OpenSSH
sudo ufw enable
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ripplesftc.com -d www.ripplesftc.com
sudo mkdir -p /var/www/ripplesftc.com
cd /var/www
sudo git clone git@github.com:FTC-Ripples-25832/the-ripples.git ripplesftc.com
cd /var/www/ripplesftc.com
echo "NEXT_PUBLIC_SITE_URL=https://www.ripplesftc.com/" > .env
pnpm install
pnpm build
pm2 start ecosystem.config.js
pm2 save
