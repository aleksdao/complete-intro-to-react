var div = React.DOM.div
var h1 = React.DOM.h1

//enhanced literal object syntax

//creating a type of component which can be used many many times
//composite component. component of our own creation
var MyTitle = React.createClass({
    render () {
      return (
        div(null,
          h1({style: {color: this.props.color}}, this.props.title)
        )
      )
    }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

//createElement is one specific element. instance of the class
//div represents one div and bunch of children. can't assign MyFirstComponent to be multiple elements (unless it is in some kind of grouping)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color:'rebeccapurple'}),
    ce(MyTitle, {title: 'Use props everywhere!',color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'Props are the best!', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
