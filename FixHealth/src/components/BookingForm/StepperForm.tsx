import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Carousel } from '../Carousel/Carousel';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3'];
}

function getStepContent(step: number, formData, setFormData) {
  console.log(step);
  switch (step) {
    case 0:
      return(
      <div>
        <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        <input className='w-full h-50 bg-white text-black focus:border-blue-500' placeholder="Phone Number" type="number" value={formData.phoneNumber}
        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
        />

      </div>
      );
    case 1:
      return (
        <div className='flex justify-evenly items-center flex-col mb-10'>
        <input className='w-full text-black bg-white focus:border-blue-500' placeholder="Age" type="number" value={formData.age}  
        onChange={(e) => setFormData({...formData, age: e.target.value})} />
        <TextField
    
        label="City"
        variant="outlined"
        fullWidth
        value={formData.city}
        onChange={(e) => setFormData({...formData, city: e.target.value})}
      />
      <TextField
        label="Company"
        variant="outlined"
        fullWidth
        value={formData.company}
        onChange={(e) => setFormData({...formData, company: e.target.value})}
      />
      </div>
      )
    case 2:
      return (

        <div className='text-black'>
          {formData.age>40 ?(<div>
          <label>Any previous experience with physiotherapy</label>
          <input 
            type="radio" 
            id="yes" 
            name="experience" 
            checked={formData.experience === true}
            onChange={() => setFormData({...formData, experience: true})}
          />
          <label htmlFor="yes">Yes</label>
          <input 
            type="radio" 
            id="no" 
            name="experience" 
            checked={formData.experience === false}
            onChange={() => setFormData({...formData, experience: false})}
          />
          <label htmlFor="no">No</label>
          </div>
          ):
          (
          <div></div>
            )}
          
        </div>
      );
    default:
      return 'Unknown step';
  }
}

export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    experience: false, 
  });
  console.log(formData);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };


  const handleSubmit = () => {
    axios.post('http://localhost:5000/submit-form', formData)
    .then(response => {
      console.log(response.data);
      setDataa(response.data);
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('There was an error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    });
  };
  const [Dataa, setDataa]=useState("")
  return (
    <>
    {Dataa!=="" ? (
    
    <Carousel Dataa={Dataa}/>
    )
    :
    (<>
        <Grid container spacing={2}> 
        <Grid item xs={4}>
          <div className='max-w-full h-96 text-black ml-10 bg-white rounded-lg shadow-md overflow-hidden'> 
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : 
            (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep, formData, setFormData)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
        </Grid>
        </Grid>
    </>)
  }
  </>
  );
}