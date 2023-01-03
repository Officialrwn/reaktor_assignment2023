INSERT INTO `pilots` (`pilotid`, `firstname`, `lastname`, `phone`, `email`, `distance`) VALUES ?
ON DUPLICATE KEY UPDATE `distance`=IF(`distance`<VALUES(`distance`),`distance`,VALUES(`distance`))