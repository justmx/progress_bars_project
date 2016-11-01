import React, {PropTypes} from 'react';

const SelectInput = ({name, onChange, defaultOption, value, error, options}) => {
  return (
   <div className="field myselector">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form-control">
      {options.map((option) => {
        return <option key={option.value} value={option.value}>{option.text}</option>;
      })
      }
    </select>
  </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
  //<label htmlFor={name}>{label}</label>
//  className="form-control"


// <div className="form-group">
//     <div className="field">
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//       >
//         <option value="">{defaultOption}</option>
//         {options.map((option) => {
//           return <option key={option.value} value={option.value}>{option.text}</option>;
//         })
//         }
//       </select>
//       {error && <div className="alert alert-danger">{error}</div>}
//      </div>
// </div>
