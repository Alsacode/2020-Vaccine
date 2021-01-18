import './uibuttons.css';

const Button = (props) => {
    return (
        <button type="button" className="uibuttons" {...props} />
    );
}

export { Button as default, Button};