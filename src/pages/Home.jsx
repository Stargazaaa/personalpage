import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
return (
    <section className="page home">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="hero">
        <h1>Zikun (Quinten) Jin</h1>
        <p className="subtitle">Undergraduate at Yale University — Computer Science and Math</p>
        </motion.div>
    </section>
)
}