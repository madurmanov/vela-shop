const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context('./', true, /\.svg$/));
