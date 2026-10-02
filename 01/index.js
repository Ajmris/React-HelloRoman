'use strict';
const Paragraph=()=>{
    return React.createElement(
        'p',
        {
            id: 'first pargraph',
            className: 'paragraph',
            style: {
                backgroundColor: 'blue',
                fontSize: 'bold',
            }
        },
        'Ich wollte Programmierer werden, aber ich bin ein Idiot und habe meine Zeit unproduktiv verschwendet.',
    );
};

const appContainer=document.querySelector('#app');
//ReactDOM.render(Paragraph(), appContainer);
ReactDOM.render(React.createElement(
        'p',
        {},
        'Ich wollte Programmierer werden, aber ich bin ein Idiot und habe meine Zeit unproduktiv verschwendet.',
    ), appContainer);
//ReactDOM.render(React.createElement(Paragraph), appContainer);