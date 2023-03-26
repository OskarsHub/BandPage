import { motion } from "framer-motion";

import './AddGig.css'

const AddGig = props => {

if (!props.show) {
  return null
}

return(
    <motion.div className="popup-container"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
      <div className="popup-content">
        <h1 id="headingPopup">Add new gig</h1>
        <div className="field">
          <input type="date" id="Date-input"/>
        </div>
        <div className="field">
        <textarea id="info-input" className="input-field"/>
        </div>
        <div className="buttonContainer">
            <button className="buttonCancel" type="button" onClick={props.onClose}>Cancel</button>
        </div>
    </div>
  </motion.div>
  )
}

export default AddGig