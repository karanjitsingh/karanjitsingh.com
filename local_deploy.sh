echo "Deploying to /var/www"
npm run build

rm -rf /var/www/*
cp -a ./out/. /var/www
chmod +x /var/www/*

# Fedora specific deployment
chown -R apache:apache /var/www
chcon -R system_u:object_r:httpd_sys_content_t:s0 /var/www