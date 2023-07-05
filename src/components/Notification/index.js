// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  // console.log(props)
  const {children} = props
  // console.log(children)

  return (
    <div className="notification">
      {children}
      <GrFormClose className="icon-size" />
    </div>
  )
}
export default Notification
