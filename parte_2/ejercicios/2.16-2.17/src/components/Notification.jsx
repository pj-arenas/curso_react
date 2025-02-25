const Notification = ({errorMessage}) => {
    
    if (errorMessage === null) {
        return null
      }else{
        
    const message =errorMessage.message
    const error =errorMessage.error
    
  
    
    return (
    
      <div className={error ? 'error' :  'correct'}>
        {message}
      </div>
    )
      }
     
    
  }

  export default Notification