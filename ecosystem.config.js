module.exports = {
  apps: [
    {
      name: "the-ripples", // The name for your app in PM2
      script: "pnpm",
      args: "start",
      cwd: "/var/www/ripplesftc.com", // The directory where the app will be deployed
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000 // The port your app will run on
      }
    }
  ]
}
