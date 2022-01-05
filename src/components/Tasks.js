import PropTypes from 'prop-types'

import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, idx) => (
        <Task key={idx} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default Tasks
