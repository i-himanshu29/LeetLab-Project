````
to be deleted....

- what exactly upsert do?

upsert in prisma checks if a record exists

if yes, it updates
if not, it creates

helpful to avoid duplicates and handle both insert/update in one call

- But agar update krenge to purane submissions ko kaise access krenge?

since upsert updates existing problemSolved, old submissions won't be lost if they're stored separately in a submissions table

just avoid storing full submissions in problemSolved
