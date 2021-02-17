import styles from './settings.module.scss';
import Button from '../../shared/uibuttons';



function Settings(props) {

    const handleTypeSubmit = (event) => {
        event.prevenDefault();
        const newtype = event.target.elements.type.value;
        props.onTypeSubmit(newtype);
        event.target.elements.type.value = "";
        

    }


     return (
         <div className={styles.settings}>
             <h2>World Vaccination Program</h2>
             <h3>Vaccine Types</h3>
             <div className={styles.settings_types}>
                 {props.types.map((type) => <div key={type}>{type}</div>)}
                 <form onSubmit={handleTypeSubmit}>
                   <div className={styles.typeform}>
                    <input type="text" name="type" />
                    <Button type="submit" primary>ADD</Button> 
                    </div>  
                 </form>
                 <h4><strong>Is the COVID-19 vaccine safe? What do we know about its safety?</strong></h4>
              
                 <p>The U.S. vaccine safety system works to make sure that all vaccines are as safe as possible.
                    Safety has been a top priority as federal agencies work with vaccine manufacturers to develop 
                    and authorize a COVID-19 vaccine. Here are some key areas that are part of a COVID-19 vaccine development,
                    review and authorization:</p>
                    <br />
                 <ul>
                    <li><p><strong>Careful testing.</strong> All vaccines go through clinical trials to test safety and effectiveness.
                         For the COVID-19 vaccine, The <cite>Food and Drug Administration (FDA) set up rigorous standards</cite> for vaccine developers to meet.
                          This <cite>infographic from the National Institutes of Health shows the four phases a vaccine must go through </cite> before it is released to the public.</p></li>

                 </ul>
                 <ul>
                    <li><p><strong>Authorization for emergency use.</strong> Vaccines that meet FDA safety and effectiveness standards can be made available
                                   in the United States by approval or by emergency use authorization (EUA).
                                   An EUA provides temporary authorization of a vaccine or medication under emergency situations, such as the coronavirus pandemic.</p></li>

                 </ul>
                 <ul>
                    <li><p><strong>Continuous monitoring for problems and side effects.</strong>  Once a vaccine is authorized for use, monitoring continues,
                                    with systems in place to track problems or side effects that were not detected during the clinical trials. For the COVID-19 vaccine, 
                                    the FDA and the Centers for Disease Control and Prevention (CDC) are expanding their vaccine monitoring. If there are problems with the vaccine,
                                    they are most likely to emerge early in the testing process when they can be identified and addressed.</p></li>
                                    
                 </ul>
                 <p>You can learn more from the <cite> CDC about the safety steps in place for the COVID-19 vaccine.</cite></p>
                 
                
             </div>
              
         </div>
     );
}

export default Settings;