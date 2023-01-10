import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import BakeryDiningTwoToneIcon from '@mui/icons-material/BakeryDiningTwoTone';
import EmojiNatureTwoToneIcon from '@mui/icons-material/EmojiNatureTwoTone';
import HikingTwoToneIcon from '@mui/icons-material/HikingTwoTone';
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import PestControlRodentTwoToneIcon from '@mui/icons-material/PestControlRodentTwoTone';
import RamenDiningTwoToneIcon from '@mui/icons-material/RamenDiningTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';

export const mainNavBar = [
  {
    id: 0,
    icon: <EmojiNatureTwoToneIcon sx={{color: '#fc7cd6'}} />,
    label: 'Spring',
    route: 'spring'
  },
  {
    id: 1,
    icon: <WbSunnyTwoToneIcon sx={{color: '#ffc403'}} />,
    label: 'Summer',
    route: 'summer'
  },
  {
    id: 2,
    icon: <SpaTwoToneIcon sx={{color: '#97fc8d'}} />,
    label: 'Fall',
    route: 'fall'
  },
  {
    id: 3,
    icon: <AcUnitTwoToneIcon  sx={{color: '#9dfae1'}} />,
    label: 'Winter',
    route: 'winter'
  },
  {
    id: 4,
    icon: <HikingTwoToneIcon sx={{color: '#fa7f2d'}}/>,
    label: 'Hiking',
    route: 'hiking'
  },
  {
    id: 5,
    icon: <PestControlRodentTwoToneIcon sx={{color: '#c3c4c2'}} />,
    label: 'Wildlife',
    route: 'wildlife'
  },
]

export const subNavbar = [
  {
    id: 0,
    icon: <BakeryDiningTwoToneIcon sx={{color: '#f2bb55'}} />,
    label: 'Breakfast',
    route: 'breakfast'
  },
  {
    id: 1,
    icon: <RamenDiningTwoToneIcon sx={{color: '#cdfaf7'}} />,
    label: 'Lunch',
    route: 'lunch'
  },
  {
    id: 2,
    icon: <LunchDiningTwoToneIcon sx={{color: '#d97562'}} />,
    label: 'Dinner',
    route: 'dinner'
  },
]