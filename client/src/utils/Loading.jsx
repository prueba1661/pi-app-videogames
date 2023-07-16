import React from 'react'
import loading from '../assets/loading.gif'
import styles from './utils.module.css'

const Loading = () => (
  <div>
  <img src={loading} alt="loading" 
  className={styles.loading}
  />
  <p className={styles.loadingText}>Loading...</p>
  </div>
)

export default Loading
