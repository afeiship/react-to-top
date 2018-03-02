# react-to-top
> Back to top for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onScrollEnd: PropTypes.func,
    onScroll: PropTypes.func,
    throttle: PropTypes.number,
    offset: PropTypes.number,
    rate: PropTypes.number,
  };

  static defaultProps = {
    offset: 50,
    rate: 0.8,
    value: false,
    throttle: 50,
    onChange: noop,
    onScroll: noop,
    onScrollEnd: noop,
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-to-top --save
// import : import ReactToTop from 'react-to-top'

class App extends React.Component{
  state = {
    value: false,
    items:[]
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

  _onUpdate = e=>{
    const {items} = this.state;
    items.push('1111');
    this.setState({ items });
  };

  _onToTop = e =>{
    console.log('to top!');
  };

  _onScroll = e =>{
    console.log('scroll');
  };

  render(){
    return (
      <div className="hello-react-to-top">
        <ReactToTop
         value={this.state.value}
         onChange={this._onChange}
         onScrollEnd={this._onToTop}
         onScroll={this._onScroll}
         offset={200}
         rate={0.8}
         ref='rc' style={{ right:20, bottom:20 }} >
          <img src={require('./assets/back-to-top.png')} width="40" />
        </ReactToTop>

        <button onClick={this._onUpdate}>Update page content</button>
        {
          this.state.items.map((item,index)=>{
            return <p key={index}>{item}</p>
          })
        }
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
