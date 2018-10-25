const BACKEND_DOMAIN = process.env.NODE_ENV === 'production' ? 'http://ec2-18-234-163-229.compute-1.amazonaws.com' : 'http://localhost:8080';

export {
  BACKEND_DOMAIN
};


export default {
  BACKEND_DOMAIN,
};
