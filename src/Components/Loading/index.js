import React from 'react';
import styles from './index.css';
import logo from '../../assets/images/logo.svg';
import AppearAfter from '../AppearAfter';

function Loading() {
	return (
		<div>
			<AppearAfter delay={300} className={styles.loading}>
				<div>
					<img src={logo} alt='Loading Logo' />
				</div>
			</AppearAfter>
		</div>
	);
}

export default Loading;
