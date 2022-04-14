module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1aec7d088d4573b1182241a9f9208a5'),
  },
});
