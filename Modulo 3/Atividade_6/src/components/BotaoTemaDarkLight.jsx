import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from "react"
import { CiLight } from "react-icons/ci"
import { MdOutlineNightlightRound } from "react-icons/md"
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import styles from '../styles/BotaoTemaDarkLight.module.css'

function BotaoTemaDarkLight() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isDarkTheme = theme.toLowerCase() === 'dark'

  return (
    <div className={styles.container}>
      <p className={styles.label}>Mudar Tema:</p>
      <FormControlLabel
        control={
          <Switch
            checked={isDarkTheme}
            onChange={toggleTheme}
            icon={<CiLight />}
            checkedIcon={<MdOutlineNightlightRound />}
          />
        }
      />
    </div>
  )
}

export default BotaoTemaDarkLight