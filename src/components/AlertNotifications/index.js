// Write your code here

import {RiErrorWarningFill} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1> Alert Notifications </h1>

    <Notification>
      <AiFillCheckCircle className="success icon-size " />
      <div className="mid-sec">
        <h1 className="success"> Success </h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className=" error icon-size " />
      <div className="mid-sec">
        <h1 className="error"> Error </h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="warning icon-size " />
      <div className="mid-sec">
        <h1 className="warning"> Warning </h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="info icon-size " />
      <div className="mid-sec">
        <h1 className="info"> Info </h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
