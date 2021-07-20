import React, { useState } from 'react'
import AchClickable from './AchClickable'


export default ({ ach, onEdit }) => {

  return (
    <AchClickable
      onKeyPress={e => e.which == 13 && e.preventDefault()}
      onBlur={() => {
        // find change values
        // pass to un onEdit
        // onEdit(changed values)
      }}
    >

      <h1 contentEditable>{ach.Name}</h1>
    </AchClickable>
  )

}
