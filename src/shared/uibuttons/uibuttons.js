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

const FloatingButton = ({ className = "" , ...props}) => {
    return (
        <Button 
        className={classNames([
            "uibuttons--floating",
            className
        ])}
        {...props}
        />
    );
}

const ButtonContainer = ({ className = "", children, ...props}) => {

    return (
        <div 
        className={classNames(["uibutton__container", className])}
        {...props}>
        {children}
        </div>
    );

}

const ButtonAppcontainer = ({ className = "", children, ...props}) => {

    return (
        <div 
        className={classNames(["uibutton__appcontainer", className])}
        {...props}>
        {children}
        </div>
    );

}

export { Button as default, Button, FloatingButton, ButtonContainer, ButtonAppcontainer};