import Styles from './content.module.scss';

function Content(props)  {
    
    return (
        <div className={Styles.content}>
                {props.children}
        </div>
    );
}

export default Content;