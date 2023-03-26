import { motion } from "framer-motion";

import './DeleteGig.css'

const DeleteGig = props => {

if (!props.show) {
  return null
}

return(
    <motion.div className="popup-container"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
      <div className="popup-content">
        <h1 id="headingPopup">Delete gig</h1>
        <div className="field">
          <p>Coming soon</p>
        </div>
        <div className="buttonContainer">
            <button className="buttonCancelNewPassword" type="button" onClick={props.onClose}>Cancel</button>
        </div>
    </div>
  </motion.div>
  )
}

export default DeleteGig