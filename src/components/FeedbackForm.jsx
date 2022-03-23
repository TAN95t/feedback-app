import React from 'react'
import {useState} from 'react'
import  Card  from './shared/Card'
import Button from './shared/Button'
import Rating from './RatingSelect'
import { set } from 'mongoose'

function FeedbackForm({ handleAdd }) {

    const [text, setText] = useState('')
    
    const [btnDisabled, setBtnDisabled] = useState(true)
    
    const [message, setMessage] = useState('')

    const [rating, setRating] = useState(10)

    const handleSubmit = (e)=> {
      e.preventDefault()
      if(text.trim().length > 10) {
        const newFeedback = {
          text: text,
          rating: rating
        }

        handleAdd(newFeedback)
        setText('')
      }
    }

    const handleTextChange = (e) => {

        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be more than 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }


        setText(e.target.value)
    }

  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
            <Rating select={(rating)=>{setRating(rating)}}/>
          <div className="input-group">
              <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
              <Button type='submit' isDisabled={btnDisabled} >Send</Button>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
