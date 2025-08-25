sudo apt update && sudo apt upgrade -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
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
sudo ufw enable

sudo mkdir -p /var/www/ripplesftc.com