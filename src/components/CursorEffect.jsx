import React, {useEffect} from 'react'
 
export default function CursorEffect(){
  useEffect(()=>{
    const onMove = (e)=>{
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px')
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px')
    }
    window.addEventListener('mousemove', onMove)
    return ()=> window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="spotlight" aria-hidden="true"></div>
      <div className="cursor-dot" aria-hidden="true"></div>
    </>
  )
}
