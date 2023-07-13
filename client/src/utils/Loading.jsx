import React from 'react'
import loading from '../assets/loading.gif'
import styles from './utils.module.css'

const Loading = () => (
  <img src={loading} alt="Loading..." className={styles.loading} />
)

export default Loading
