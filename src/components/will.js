/*
class Blah extends React.Component {
  constructor(props) {
    this.state = {};
    this.onClick = onClick.bind(this);
    super(props);
  }

  onClick(e) {
    const filmName = e.target.value;
    if (this.state[filmName]) {
      delete state[filmName];
    } else {
      state[filmName] = true;
    }
    // setState
    // update local storage
  }


  render() {
    return (
      <>
      <h2>Short List</h2>
      {
        Object.keys(this.state).map((filmName) => {
          <p name={filmName} key={filmName} onClick={this.onClick}>{filmName}</p>
        })
      }
      <hr />
      <h2>All Films</h2>
        Object.keys(this.state).map((filmName) => {
          <button
          className={this.state[filmName] ? 'favourited' : ''}
          name={filmName}
          key={filmName}
          onClick={this.onClick}>{filmName}>
           {filmName}
         </button>
       })
     </>
   )
 }
