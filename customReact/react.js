function render(reactElement, Container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        
    domElement.setAttribute(prop, reactElement.props[prop]);
    }
    Container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to visit Google"
};

const mainContainer = document.querySelector("#root");

render(reactElement, mainContainer);