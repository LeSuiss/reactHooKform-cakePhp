//called in Homepage.ctp design to display a form made of multiple *FormRow* lines
import FormRow from './FormRow'

import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import Axios from 'axios';

//UI
import {Button} from 'semantic-ui-react'
import CountUp from 'react-countup';

const HomePage = () => {
    const ApiURL = '/activities/gettingJSON'

    //hooks call
    const [Api, setApi] = useState(null)
    const [result, setResult] = useState(null)

    //react hook form setup    
    const defaultRowValues = { elements: [{ value: 1 }] }
    const { register, control, handleSubmit, reset, setValue, } = useForm({
        defaultValues: defaultRowValues
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "elements",
        
    });



    useEffect(() => {
        const APIfetch = async () => {
            console.table('fetching on ' + ApiURL)
            const result = await Axios(ApiURL)
            setApi(result.data )
            return result.data
        }

        //fetching Api and setting initial data to data form
        APIfetch()
            .then(res => console.table(res))        
        reset(defaultRowValues)
    }, []);

    const onSubmit = (data) => {
        console.table(data.elements)
        
        data.elements.length > 1 ? //if array.length = 1 .reduce will crash // check if accumulator has .unitCost to include it in calc
            setResult(data.elements.reduce((a, b) => (a.unitCost ? (a.unitCost * a.value): a) + (b.unitCost * b.value))) :
            setResult(data.elements[0].unitCost * data.elements[0].value)

        }

    return (
        <div id="HomePage">
            <h2>Calculate your footprint</h2>
            <form className="questionnary" onSubmit={handleSubmit(onSubmit)
                // .then(res=>alert(res))
            } >
                <h3>Expense Type</h3>
                <h3>Amount (€)</h3>
                <div id='formRow'>
                {fields?.map((item, index) => {
                    return (
                        <FormRow
                            Api={Api}

                            key={item.id}
                            item={item}
                            index={index}
                            register={register}
                            remove={remove}
                            setValue={setValue}
                        />
                    );
                })}
                </div >

                <Button
                    color="blue"
                    type="button"
                    onClick={() => {append({value:1});}}
                >
                    Add new expense
                </Button>

                <Button type="submit" color="blue">
                    calculate
                </Button>

            </form>
            
            {result>0 && 
            <p style={{margin:'15px'}}> 
                <CountUp 
                    end={result}
                    duration={0.8}
                    prefix="Your CO2 footprint for this expense is :  "
                    suffix=" kg"
                    separator=" "
                />
           </p>}
        </div>
    )
}


export default HomePage
