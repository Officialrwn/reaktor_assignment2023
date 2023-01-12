INSERT INTO pilots (pilotid, firstname, lastname, phone, email, distance, posx, posy)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
ON CONFLICT (pilotid) DO 
UPDATE SET distance = $6, posx = $7, posy = $8
WHERE pilots.distance > $6