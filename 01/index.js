'use strict';

const Paragraph = () => {
  return <p className="paragraph" id="first-paragraph">
    Programmator fieri volui, sed stultus sum et tempus meum steriliter perdidi.
  </p>
};

const appContainer = document.querySelector('#app');

ReactDOM.render(React.createElement(Paragraph), appContainer);
