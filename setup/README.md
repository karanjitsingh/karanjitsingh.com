# Setup

### SELinux 

```
# Enable curl connections
setsebool -P httpd_can_network_connect on
```