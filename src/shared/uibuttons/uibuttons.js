import './uibuttons.css';

const classNames = classname => classname.join(" ");

const Button = ({ className = "", primary, secondary, ...props}) => {
    return (
        <button
         type="button"
          className= {classNames([
            "uibuttons",
            className,
            primary ? "uibuttons--primary" : "",
            secondary ? "uibuttons--secondary" : ""
          ])}
         
           {...props}
           
           />
    );
}

export { Button as default, Button};