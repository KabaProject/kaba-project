import styles from '../styles/components/menu-button.module.scss'

const MenuButton = ({className, isOpen, onClick}) => {

    const onClickHandler = () => onClick()

    return(
        <svg width="41" height="36" viewBox="0 0 41 36" fill="none" onClick={onClickHandler} className={`${styles.container} ${styles.z_up} relative flex flex-col justify-center overflow-visible items-center ${className}`} xmlns="http://www.w3.org/2000/svg">
            <path 
                fillRule="evenodd" 
                clipRule="evenodd"
                className={`${styles.top} ${
                    isOpen ? styles.top_up : styles.top_down
                }`} 
                d="M11.0651 0.170898H29.8151C32.5778 0.170898 35.2273 1.26837 37.1808 3.22187C39.1343 5.17537 40.2318 7.82489 40.2318 10.5876H0.648438C0.648438 7.82489 1.7459 5.17537 3.69941 3.22187C5.65291 1.26837 8.30243 0.170898 11.0651 0.170898ZM29.8151 2.25423H11.0651C9.21746 2.25448 7.42223 2.86845 5.96139 3.99971C4.50056 5.13097 3.45687 6.71543 2.99427 8.50423H37.8859C37.4233 6.71543 36.3796 5.13097 34.9188 3.99971C33.458 2.86845 31.6627 2.25448 29.8151 2.25423Z" 
            />

            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                className={`${isOpen ? styles.middle_active : styles.middle}`}
                d="M22.5234 12.6709L26.6901 16.8376L30.8568 12.6709H36.0651C37.1702 12.6709 38.23 13.1099 39.0114 13.8913C39.7928 14.6727 40.2318 15.7325 40.2318 16.8376V18.9209C40.2318 20.026 39.7928 21.0858 39.0114 21.8672C38.23 22.6486 37.1702 23.0876 36.0651 23.0876H4.8151C3.71004 23.0876 2.65023 22.6486 1.86883 21.8672C1.08742 21.0858 0.648438 20.026 0.648438 18.9209V16.8376C0.648437 15.7325 1.08742 14.6727 1.86883 13.8913C2.65023 13.1099 3.71004 12.6709 4.8151 12.6709H22.5234ZM26.6901 19.7834L21.6609 14.7542H4.8151C4.26257 14.7542 3.73267 14.9737 3.34196 15.3644C2.95126 15.7551 2.73177 16.285 2.73177 16.8376V18.9209C2.73177 19.4734 2.95126 20.0033 3.34196 20.394C3.73267 20.7847 4.26257 21.0042 4.8151 21.0042H36.0651C36.6176 21.0042 37.1475 20.7847 37.5382 20.394C37.9289 20.0033 38.1484 19.4734 38.1484 18.9209V16.8376C38.1484 16.285 37.9289 15.7551 37.5382 15.3644C37.1475 14.9737 36.6176 14.7542 36.0651 14.7542H31.7193L26.6901 19.7834Z" 
            />

            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                className={`${styles.bottom} ${
                    isOpen ? styles.bottom_down : styles.bottom_up
                }`}
                d="M40.2318 25.1709C40.2318 27.9336 39.1343 30.5831 37.1808 32.5366C35.2273 34.4901 32.5778 35.5876 29.8151 35.5876H11.0651C8.30243 35.5876 5.65291 34.4901 3.69941 32.5366C1.7459 30.5831 0.648438 27.9336 0.648438 25.1709H40.2318ZM11.0651 33.5042H29.8151C31.6627 33.504 33.458 32.89 34.9188 31.7588C36.3796 30.6275 37.4233 29.043 37.8859 27.2542H2.99427C3.91927 30.848 7.18177 33.5042 11.0651 33.5042Z"
            />
        </svg>

    )
}

export default MenuButton