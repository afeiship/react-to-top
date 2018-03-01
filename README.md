# react-to-top
> Back to top for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    offset: PropTypes.number,
    rate: PropTypes.number,
  };

  static defaultProps = {
    offset: 50,
    rate: 0.8,
    value: false,
    onChange: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-to-top --save
// import : import ReactToTop from 'react-to-top'

class App extends React.Component{
  state = {
    value: false
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    this.setState({ value: e.target.value})
  };

  render(){
    return (
      <div className="hello-react-to-top">
        <ReactToTop value={this.state.value} offset={200} rate={0.8} ref='rc' style={{ right:20, bottom:20 }} onChange={this._onChange}>
          <img src={require('./assets/back-to-top.png')} width="40" />
        </ReactToTop>

        <header>HEADER</header>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <p>test text!</p> <br/>
        <footer>FOOTER</footer>
      </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-to-top-options:(
);

@import '~node_modules/react-to-top/style.scss';
```

## bug:
- [x] z-index conflict with transition animate.
- [ ] page height update trigger a bug.
