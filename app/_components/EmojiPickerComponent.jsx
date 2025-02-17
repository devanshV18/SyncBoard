"use client"
import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'

function EmojiPickerComponent({children, setEmojiIcon}) {

    const [openEmojiPicker, setOpenEmpjiPicker] = useState(false)

  return (
    <div>
        <div onClick={(e) => setOpenEmpjiPicker(!openEmojiPicker)}>
            {children}
        </div>      
        {
        openEmojiPicker && 
        <div className='absolute z-10'>
            <EmojiPicker
            emojiStyle='apple'
                onEmojiClick={(e) => {
                    setEmojiIcon(e.emoji)
                    setOpenEmpjiPicker(false)
                }}
            />
        </div>
        }
    </div>
  )
}

export default EmojiPickerComponent
