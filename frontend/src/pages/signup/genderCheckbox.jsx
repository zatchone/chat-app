import React from 'react';

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {;
  return (
    
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-4">
        <span className="label-text text-lg font-semibold">Gender</span>
        <div className="flex gap-4">
          <label className={`flex items-center space-x-2 cursor-pointer ${selectedGender==="male" ? "selected ": ""}`}>
            <input type="radio" name="gender" className="radio radio-primary"
            checked = {selectedGender === 'male'} 
            onChange={()=> onCheckboxChange("male")}
            />
            <span className="label-text">Male</span>
          </label>
          <label className={`flex items-center space-x-2 cursor-pointer  ${selectedGender==="female" ? "selected ": ""}`}>
            <input type="radio" name="gender" className="radio radio-secondary" 
            checked = {selectedGender === 'female'} 
            onChange={()=> onCheckboxChange("female")}
            />
            <span className="label-text">Female</span>
          </label>
          <label className={`flex items-center space-x-2 cursor-pointer  ${selectedGender==="other" ? "selected ": ""}`}>
            <input type="radio" name="gender" className="radio radio-accent" 
             checked = {selectedGender === 'other'} 
             onChange={()=> onCheckboxChange("other")}
            />
            <span className="label-text">Other</span>
          </label>
        </div>
      </label>
    </div>
  );
};

export default GenderCheckbox;