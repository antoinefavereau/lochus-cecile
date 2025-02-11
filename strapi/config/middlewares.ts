export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "400mb",
      jsonLimit: "400mb",
      textLimit: "400mb",
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
