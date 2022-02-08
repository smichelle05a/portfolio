import msg from '../styles/message.module.scss'
import { useState } from 'react'

function Message({message, isError}) {

  return (
    <div className={`${msg.message} d-flex jc-center ai-center`}>
      <div className={`border br-light bg-light fs-18 p-5 rounded-l d-flex fd-col jc-center ai-center ${msg.message__inner} ${isError ? msg.message__innerError : "color-primary-darker"}`}>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
