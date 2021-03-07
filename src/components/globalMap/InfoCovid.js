import React from 'react';
import "./InfoCovid.scss";

const InfoCovid = () => {
    return ( 

        <div className="info">
            <h5><strong>What to do to keep yourself and others safe from COVID-19?</strong></h5>
              <ul>
                  <li>
                     <p> <strong>Maintain at least a 1-metre distance between yourself and others</strong>to reduce your risk of infection when they cough,
                      sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better. </p>
                  </li>
                  <li>
                     <p> <strong>Make wearing a mask a normal part of being around other people. The appropriate use,
                          storage and cleaning or disposal are essential to make masks as effective as possible.</strong></p>
                  </li>
              </ul>
              <br/>
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public#:~:text=If%20COVID%2D19%20is%20spreading,Do%20it%20all!" target="blank"><strong>Here are the basics of how to wear a mask:</strong></a>
               

                <ul>
                  <li>
                     <p>Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.</p>
                  </li>
                  <li>
                     <p>Make sure it covers both your nose, mouth and chin</p>
                  </li>
                  <li>
                     <p>When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.</p>
                  </li>
                  <li>
                     <p>Don’t use masks with valves.</p>
                  </li>
              </ul>

              <footer>
                  <p>This App is a resource to help advance the understanding of the virus, inform the public, and brief policymakers in order to guide a response, improve care, and save lives.</p>
                  <p>Alsacode by Sasky</p>
              </footer>
        </div>
     );
}
 
export default InfoCovid;


// Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.
// Make sure it covers both your nose, mouth and chin.
 //When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.
// Don’t use masks with valves.