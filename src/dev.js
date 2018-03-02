import './dev.scss';
import ReactToTop from './main';

/*===example start===*/

// install: npm install afeiship/react-to-top --save
// import : import ReactToTop from 'react-to-top'

class App extends React.Component{
  state = {
    items:[]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
