function ClickableButton() {

    const [clicked, setClick] = React.useState(false);
  
    if (clicked) {
      return 'Nothing here yet! Change this text to add more info.';
    }
  
    return React.createElement(
      'button', {
          className: 'main-button',
      onClick: () => setClick(true)
    },
      'Press Here'
    );
}
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(React.createElement(ClickableButton));