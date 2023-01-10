import React from 'react';
import Badge from '@mui/material/Badge';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const UpcomingAlarm = ({ anchorEl, badgeContent = 0, iconColor, onClick, tooltipTitle }) => {
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton color={iconColor} onClick={onClick}>
        <Badge badgeContent={badgeContent} color="error">
          <AlarmTwoToneIcon color="action" />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default UpcomingAlarm;