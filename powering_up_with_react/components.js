// Components are written in upper camel case
class StoryBox extends React.Component { // Component class inherits from a React base class.
  // Every component needs a render() function
  render() {

    const now = new Date();

    return(
      <div>
        <h3>Stories</h3>
        <p className="lead">
          Current Time: {now.toTimeString()}
        </p>
      </div>
      );
  }
}

ReactDOM.render(
  // Invoke StoryBox       Target container where component will be rendered to
  <StoryBox />, document.getElementById('story-app')
  );
