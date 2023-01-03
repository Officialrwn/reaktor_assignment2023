"insert into pilots (pilotid, firstname, lastname, phone, email, distance) values ? \
		on duplicate key update distance = if(distance < values(distance), distance, values(distance))"
INSERT INTO `pilots`
(`pilotid`, `firstname`, `lastname`, `phone`, `email`, `distance`) ?
ON `duplicate` KEY UPDATE
