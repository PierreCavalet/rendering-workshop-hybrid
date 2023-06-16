// https://nuxt.com/docs/api/configuration/nuxt-config
const routes = ["/"].concat(
  Array.from({ length: 10 }, (_, i) => i + 1).map((id) => `/pokemon/${id}`)
);

const routeRules = routes.reduce(
  (rules: Record<string, Record<string, boolean>>, route) => {
    rules[route] = { prerender: true };

    return rules;
  },
  {}
);

export default defineNuxtConfig({
  routeRules,
  experimental: {
    payloadExtraction: true,
  },
});
