ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
          <Route path="Services" component={Services}>  
            <Route path="Services/front" component={Front} />
          </Route>    
          <Route path="Clothing" component={Clothing} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
