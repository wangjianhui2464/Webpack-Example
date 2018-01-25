function getComponent() {

  // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', 'webpackChunkName'], ' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');

}

getComponent().then(component => {
  document.body.appendChild(component);
});