import React, {Component, useState} from 'react';
import RecipeChoices from './RecipeChoices';
import drinksJson from '../drinks.json';
const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temprature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    })
    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});
      
    const getNextDrink = () => {
        const drink = drinksJson.drinks[Math.floor(Math.random() * drinksJson.drinks.length)];
        setCurrentDrink(drink.name);
        setTrueRecipe(drink.recipe);
    }
    const onNewDrink = () => {
        // This clears the inputs to get the new drink recipe guess
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' 
        });            
        // This sets the true recipe to the current drink
        getNextDrink();
    }
    const onCheckAnswer = () => {
        if (inputs.temperature === trueRecipe.temperature){
            setCheckedTemperature('correct');
        }else{
            setCheckedTemperature('wrong');
        }
        if (inputs.milk === trueRecipe.milk){
            setCheckedMilk('correct');  
        }else{
            setCheckedMilk('wrong');
        }
        if (inputs.syrup === trueRecipe.syrup){
            setCheckedSyrup('correct');
        }else{
            setCheckedSyrup('wrong');
        }
        if (inputs.blended === trueRecipe.blended){
            setCheckedBlended('correct');
        }else{
            setCheckedBlended('wrong');
        }
    }
    return (
        <div>
            <h2>hi, I'd like to order a:</h2>
            <div className='drink-container'>
                <h2 className='mini-header'>{currentDrink}</h2>
                <button type='new-drink-button' className='button new-drink' onClick={onNewDrink}>🔄</button>
            </div>
            <form className='container'>
                <h3>Temperature</h3>
                <div className="answer-space" id='correct_temp' >
                    {inputs["temperature"]} 
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    currentVal={inputs["temperature"]}
                />
                <h3>Syrup</h3>
                <div className="answer-space" id='correct_syrup' >
                    {inputs["syrup"]} 
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />
                <h3>Milk</h3>
                <div className="answer-space" id='correct_milk' >
                    {inputs["milk"]} 
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />
                <h3>Blended</h3>
                <div className="answer-space" id='correct_blended' >
                    {inputs["blended"]} 
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
            </form>
            <button type='submit' className='button submit' onClick={onCheckAnswer}>Check Answer</button>
            <button type='new-drink-button' className='button submit' onClick={onNewDrink}>New Drink</button>
        </div>
    );
};

export default BaristaForm;