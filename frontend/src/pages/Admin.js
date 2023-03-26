import React, { useState } from "react";
import { motion } from "framer-motion";
import AddGig from "../components/AddGig"
import EditGig from "../components/EditGig"
import DeleteGig from "../components/DeleteGig"

import './Admin.css'


const Admin = () => {

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className='AdminContainer'>
      <div>
        <h1 id='h1'>Admin page</h1>
        <button id='btn' onClick={ () => setShowAdd(true) }>Add gig</button>
        <button id='btn' onClick={ () => setShowEdit(true) }>Edit gig</button>
        <button id='btn' onClick={ () => setShowDelete(true) }>Delete gig</button>
        </div>
        <div className="Popup">
        <AddGig    onClose={ () => setShowAdd(false) }    show={showAdd}/>
        <EditGig   onClose={ () => setShowEdit(false) }   show={showEdit}/>
        <DeleteGig onClose={ () => setShowDelete(false) } show={showDelete}/>
      </div>
    </div>
    );
  };
  
  export default Admin;  