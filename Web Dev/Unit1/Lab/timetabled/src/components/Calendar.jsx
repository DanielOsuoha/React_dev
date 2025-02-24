import React from "react";
import Events from "./Events";
const Calendar = () => {
  
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Events event='Starbucks 🎩' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Events event='Yolk 🍳' color ='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Events event='Subway 🚊' color ='red'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Events event='The Bean 🫘' color ='blue'/>
                        </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Events event='River Cruise' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Events event='Deep Dish 🍳' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Events event='Subway 🍳' color='red'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Events event='Art Institute 🍳' color='blue'/>
                        <td></td>
                        <Events event='Girl & the Goat 🍳' color='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Events event='Cubs Game 🍳' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Events event='Subway 🍳' color='red'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Events event='Fancy Dinner 🍳' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Events event='Shopping 🍳' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">6 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>   
    
            </table>
        </div>
    );
};
export default Calendar;
