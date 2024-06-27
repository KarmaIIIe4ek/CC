import {
    HomeOutlined,
    MenuBookOutlined,
    SettingsOutlined,
} from '@mui/icons-material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

export const navMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined/>,
        path: 'user/lk',
        id: 1,
    },
    {
        name: 'Подписка',
        icon: <CurrencyRubleIcon/>,
        path: 'user/lk/subscribe',
        id: 2,
    },
    {
        name: 'Документация',
        icon: <MenuBookOutlined/>,
        path: 'user/lk/docs',
        id: 3,
    },
    {
        name: 'Настройки',
        icon: <SettingsOutlined/>,
        path: 'user/lk/settings',
        id: 4,
    },
]