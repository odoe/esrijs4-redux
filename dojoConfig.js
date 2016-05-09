window.dojoConfig = {
  async: true,
  deps: ['app/main'],
  packages: [{
    name: 'react',
    location: 'https://fb.me/',
    main: 'react-15.0.1'
  }, {
    name: 'react-dom',
    location: 'https://fb.me/',
    main: 'react-dom-15.0.1'
  }, {
    name: 'app',
    location: location.pathname.replace(/\/[^\/]+$/, '') + 'dist',
    main: 'main'
  }]
};
