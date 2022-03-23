import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet!</p>;
  }

  return (
    <div className="feeedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

//   return (
//     <div className="feeedback-list">
//         {feedback.map((item)=>(
//             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//         ))}
//     </div>
//   )
// }

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
