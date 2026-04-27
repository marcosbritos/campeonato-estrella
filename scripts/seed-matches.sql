-- Seed: partidos Campeonato Estrella
-- Ejecutar en Supabase SQL Editor

INSERT INTO matches (zone, round, home_team_id, away_team_id, home_score, away_score, status, match_date) VALUES

-- ===== FECHA 1 =====
-- Zona A
('A',1,'92d4337f-193b-439e-a2a8-9cc4441432d3','07478855-e4cd-4b41-974a-7d4b6dd0d05c',2,3,'finished',NULL),  -- ALMIRANTE 2-3 INTER
('A',1,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','a1c1eaee-9f58-43a7-89df-7a57eac9dc89',1,0,'finished',NULL),  -- TORNADO 1-0 TERCER TIEMPO
('A',1,'1f04eb10-390a-470d-95c1-ae1d6510b93e','b80c8dd8-e581-4704-9e8e-cc3eaf54cb76',0,0,'pending',NULL),   -- JARDIN AMERICA vs PA LA BIRRA
('A',1,'2d30afd7-256c-4251-baa0-5aeb009a91df','2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3',0,0,'pending',NULL),   -- SECTOR 32 vs ATLETICO LUGANO
-- Zona B
('B',1,'d381898a-6399-4918-8be6-510c29bb5b93','531ea5b9-0059-44ba-a173-8cdb0cbec7fc',0,2,'finished',NULL),  -- LA RESAKA FC 0-2 MANCHESTER BOYS
('B',1,'e84e8c42-628c-455f-aaeb-47dbb20da59e','555a4713-5466-4a93-9326-56278d2a6d09',0,7,'finished',NULL),  -- SUDAKAS FC 0-7 VICIOS FC
('B',1,'80fc6f07-879b-4ca8-bb04-96c30ad1ded7','02eb5b0c-681b-42f0-97f0-9d173b9cfdd5',0,0,'pending',NULL),   -- CALLE 10 vs SABUESOS
('B',1,'3808d7eb-008b-4741-babf-56db55773a01','462ea120-150d-49eb-924d-810c787f3eb3',0,0,'pending',NULL),   -- PROGRESO vs FORESTAL
-- Zona C
('C',1,'6ed052da-6383-4420-aad1-239ae49d7665','209d167f-fe24-4129-a05a-440d69eefcfb',1,2,'finished',NULL),  -- LOS PUMAS 2.0 1-2 D.C LOS PUMAS
('C',1,'446df768-eef5-47e5-8f55-1b6cd7cec3a0','4fa81999-12e1-44cf-ac5c-52b664e4a3b5',3,0,'finished',NULL),  -- CASITA NUEVA 3-0 DEP ENTUSIASMO
('C',1,'6f820750-3765-4d56-a98b-44268105e0b5','3bcdf449-9657-4924-9db2-2d4d6e0afff8',1,3,'finished',NULL),  -- GUEMES SFI 1-3 ROSARIO
('C',1,'7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc','eeb63eaa-e3d1-475d-a107-c60733791e56',1,5,'finished',NULL),  -- 420 F.C 1-5 FALSO FUTBOL

-- ===== FECHA 2 =====
-- Zona A
('A',2,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','b80c8dd8-e581-4704-9e8e-cc3eaf54cb76',2,1,'finished',NULL),  -- TORNADO 2-1 PA LA BIRRA
('A',2,'92d4337f-193b-439e-a2a8-9cc4441432d3','2d30afd7-256c-4251-baa0-5aeb009a91df',0,0,'pending',NULL),   -- ALMIRANTE vs SECTOR 32
('A',2,'a1c1eaee-9f58-43a7-89df-7a57eac9dc89','07478855-e4cd-4b41-974a-7d4b6dd0d05c',2,5,'finished',NULL),  -- TERCER TIEMPO 2-5 INTER
('A',2,'1f04eb10-390a-470d-95c1-ae1d6510b93e','2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3',0,4,'finished',NULL),  -- JARDIN AMERICA 0-4 ATLETICO LUGANO
-- Zona B
('B',2,'d381898a-6399-4918-8be6-510c29bb5b93','02eb5b0c-681b-42f0-97f0-9d173b9cfdd5',0,2,'finished',NULL),  -- LA RESAKA FC 0-2 SABUESOS
('B',2,'3808d7eb-008b-4741-babf-56db55773a01','e84e8c42-628c-455f-aaeb-47dbb20da59e',3,0,'finished',NULL),  -- PROGRESO 3-0 SUDAKAS FC
('B',2,'531ea5b9-0059-44ba-a173-8cdb0cbec7fc','462ea120-150d-49eb-924d-810c787f3eb3',0,1,'finished',NULL),  -- MANCHESTER BOYS 0-1 FORESTAL
('B',2,'80fc6f07-879b-4ca8-bb04-96c30ad1ded7','555a4713-5466-4a93-9326-56278d2a6d09',1,0,'finished',NULL),  -- CALLE 10 1-0 VICIOS FC
-- Zona C
('C',2,'3bcdf449-9657-4924-9db2-2d4d6e0afff8','eeb63eaa-e3d1-475d-a107-c60733791e56',0,8,'finished',NULL),  -- ROSARIO 0-8 FALSO FUTBOL
('C',2,'6f820750-3765-4d56-a98b-44268105e0b5','209d167f-fe24-4129-a05a-440d69eefcfb',3,1,'finished',NULL),  -- GUEMES SFI 3-1 D.C LOS PUMAS
('C',2,'6ed052da-6383-4420-aad1-239ae49d7665','4fa81999-12e1-44cf-ac5c-52b664e4a3b5',2,2,'finished',NULL),  -- LOS PUMAS 2.0 2-2 DEP ENTUSIASMO
('C',2,'7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc','446df768-eef5-47e5-8f55-1b6cd7cec3a0',0,1,'finished',NULL),  -- 420 F.C 0-1 CASITA NUEVA

-- ===== FECHA 3 =====
-- Zona A
('A',3,'b80c8dd8-e581-4704-9e8e-cc3eaf54cb76','2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3',2,6,'finished',NULL),  -- PA LA BIRRA 2-6 ATLETICO LUGANO
('A',3,'1f04eb10-390a-470d-95c1-ae1d6510b93e','92d4337f-193b-439e-a2a8-9cc4441432d3',1,1,'finished',NULL),  -- JARDIN AMERICA 1-1 ALMIRANTE
('A',3,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','07478855-e4cd-4b41-974a-7d4b6dd0d05c',1,4,'finished',NULL),  -- TORNADO 1-4 INTER
('A',3,'a1c1eaee-9f58-43a7-89df-7a57eac9dc89','2d30afd7-256c-4251-baa0-5aeb009a91df',0,3,'finished',NULL),  -- TERCER TIEMPO 0-3 SECTOR 32
-- Zona B
('B',3,'d381898a-6399-4918-8be6-510c29bb5b93','462ea120-150d-49eb-924d-810c787f3eb3',0,2,'finished',NULL),  -- LA RESAKA FC 0-2 FORESTAL
('B',3,'80fc6f07-879b-4ca8-bb04-96c30ad1ded7','3808d7eb-008b-4741-babf-56db55773a01',3,0,'finished',NULL),  -- CALLE 10 3-0 PROGRESO
('B',3,'531ea5b9-0059-44ba-a173-8cdb0cbec7fc','e84e8c42-628c-455f-aaeb-47dbb20da59e',1,0,'finished',NULL),  -- MANCHESTER BOYS 1-0 SUDAKAS FC
('B',3,'02eb5b0c-681b-42f0-97f0-9d173b9cfdd5','555a4713-5466-4a93-9326-56278d2a6d09',3,4,'finished',NULL),  -- SABUESOS 3-4 VICIOS FC
-- Zona C
('C',3,'6ed052da-6383-4420-aad1-239ae49d7665','7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc',1,3,'finished',NULL),  -- LOS PUMAS 2.0 1-3 420 F.C
('C',3,'209d167f-fe24-4129-a05a-440d69eefcfb','4fa81999-12e1-44cf-ac5c-52b664e4a3b5',1,0,'finished',NULL),  -- D.C LOS PUMAS 1-0 DEP ENTUSIASMO
('C',3,'6f820750-3765-4d56-a98b-44268105e0b5','eeb63eaa-e3d1-475d-a107-c60733791e56',1,7,'finished',NULL),  -- GUEMES SFI 1-7 FALSO FUTBOL
('C',3,'3bcdf449-9657-4924-9db2-2d4d6e0afff8','446df768-eef5-47e5-8f55-1b6cd7cec3a0',0,6,'finished',NULL),  -- ROSARIO 0-6 CASITA NUEVA

-- ===== FECHA 4 =====
-- Zona A
('A',4,'2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3','92d4337f-193b-439e-a2a8-9cc4441432d3',7,0,'finished',NULL),  -- ATLETICO LUGANO 7-0 ALMIRANTE
('A',4,'07478855-e4cd-4b41-974a-7d4b6dd0d05c','1f04eb10-390a-470d-95c1-ae1d6510b93e',6,1,'finished',NULL),  -- INTER 6-1 JARDIN AMERICA
('A',4,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','2d30afd7-256c-4251-baa0-5aeb009a91df',1,2,'finished',NULL),  -- TORNADO 1-2 SECTOR 32
('A',4,'b80c8dd8-e581-4704-9e8e-cc3eaf54cb76','a1c1eaee-9f58-43a7-89df-7a57eac9dc89',0,0,'pending',NULL),   -- PA LA BIRRA vs TERCER TIEMPO
-- Zona B
('B',4,'d381898a-6399-4918-8be6-510c29bb5b93','e84e8c42-628c-455f-aaeb-47dbb20da59e',0,0,'pending',NULL),   -- LA RESAKA FC vs SUDAKAS FC
('B',4,'555a4713-5466-4a93-9326-56278d2a6d09','3808d7eb-008b-4741-babf-56db55773a01',0,0,'pending',NULL),   -- VICIOS FC vs PROGRESO
('B',4,'462ea120-150d-49eb-924d-810c787f3eb3','80fc6f07-879b-4ca8-bb04-96c30ad1ded7',0,6,'finished',NULL),  -- FORESTAL 0-6 CALLE 10
('B',4,'02eb5b0c-681b-42f0-97f0-9d173b9cfdd5','531ea5b9-0059-44ba-a173-8cdb0cbec7fc',3,0,'finished',NULL),  -- SABUESOS 3-0 MANCHESTER BOYS
-- Zona C
('C',4,'6f820750-3765-4d56-a98b-44268105e0b5','446df768-eef5-47e5-8f55-1b6cd7cec3a0',1,3,'finished',NULL),  -- GUEMES SFI 1-3 CASITA NUEVA
('C',4,'4fa81999-12e1-44cf-ac5c-52b664e4a3b5','7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc',1,1,'finished',NULL),  -- DEP ENTUSIASMO 1-1 420 F.C
('C',4,'eeb63eaa-e3d1-475d-a107-c60733791e56','6ed052da-6383-4420-aad1-239ae49d7665',6,2,'finished',NULL),  -- FALSO FUTBOL 6-2 LOS PUMAS 2.0
('C',4,'209d167f-fe24-4129-a05a-440d69eefcfb','3bcdf449-9657-4924-9db2-2d4d6e0afff8',0,0,'pending',NULL),   -- D.C LOS PUMAS vs ROSARIO

-- ===== FECHA 5 =====
-- Zona A
('A',5,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','92d4337f-193b-439e-a2a8-9cc4441432d3',1,2,'finished',NULL),  -- TORNADO 1-2 ALMIRANTE
('A',5,'2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3','a1c1eaee-9f58-43a7-89df-7a57eac9dc89',0,1,'finished',NULL),  -- ATLETICO LUGANO 0-1 TERCER TIEMPO
('A',5,'07478855-e4cd-4b41-974a-7d4b6dd0d05c','b80c8dd8-e581-4704-9e8e-cc3eaf54cb76',0,0,'pending',NULL),   -- INTER vs PA LA BIRRA
('A',5,'2d30afd7-256c-4251-baa0-5aeb009a91df','1f04eb10-390a-470d-95c1-ae1d6510b93e',0,0,'pending',NULL),   -- SECTOR 32 vs JARDIN AMERICA
-- Zona B
('B',5,'d381898a-6399-4918-8be6-510c29bb5b93','3808d7eb-008b-4741-babf-56db55773a01',0,2,'finished',NULL),  -- LA RESAKA FC 0-2 PROGRESO
('B',5,'e84e8c42-628c-455f-aaeb-47dbb20da59e','80fc6f07-879b-4ca8-bb04-96c30ad1ded7',0,4,'finished',NULL),  -- SUDAKAS FC 0-4 CALLE 10
('B',5,'555a4713-5466-4a93-9326-56278d2a6d09','531ea5b9-0059-44ba-a173-8cdb0cbec7fc',5,2,'finished',NULL),  -- VICIOS FC 5-2 MANCHESTER BOYS
('B',5,'462ea120-150d-49eb-924d-810c787f3eb3','02eb5b0c-681b-42f0-97f0-9d173b9cfdd5',0,0,'pending',NULL),   -- FORESTAL vs SABUESOS
-- Zona C
('C',5,'6f820750-3765-4d56-a98b-44268105e0b5','7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc',0,0,'pending',NULL),   -- GUEMES SFI vs 420 F.C
('C',5,'446df768-eef5-47e5-8f55-1b6cd7cec3a0','6ed052da-6383-4420-aad1-239ae49d7665',5,1,'finished',NULL),  -- CASITA NUEVA 5-1 LOS PUMAS 2.0
('C',5,'4fa81999-12e1-44cf-ac5c-52b664e4a3b5','3bcdf449-9657-4924-9db2-2d4d6e0afff8',2,1,'finished',NULL),  -- DEP ENTUSIASMO 2-1 ROSARIO
('C',5,'eeb63eaa-e3d1-475d-a107-c60733791e56','209d167f-fe24-4129-a05a-440d69eefcfb',6,0,'finished',NULL),  -- FALSO FUTBOL 6-0 D.C LOS PUMAS

-- ===== FECHA 6 (19/04/2025) =====
('A',6,'b80c8dd8-e581-4704-9e8e-cc3eaf54cb76','92d4337f-193b-439e-a2a8-9cc4441432d3',0,0,'pending','2025-04-19T09:30:00-03:00'),  -- PA LA BIRRA vs ALMIRANTE
('A',6,'07478855-e4cd-4b41-974a-7d4b6dd0d05c','2d30afd7-256c-4251-baa0-5aeb009a91df',0,0,'pending','2025-04-19T11:00:00-03:00'),  -- INTER vs SECTOR 32
('A',6,'a1c1eaee-9f58-43a7-89df-7a57eac9dc89','1f04eb10-390a-470d-95c1-ae1d6510b93e',0,0,'pending','2025-04-19T12:30:00-03:00'),  -- TERCER TIEMPO vs JARDIN AMERICA
('A',6,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3',0,0,'pending','2025-04-19T14:00:00-03:00'),  -- TORNADO vs ATLETICO LUGANO
('B',6,'d381898a-6399-4918-8be6-510c29bb5b93','555a4713-5466-4a93-9326-56278d2a6d09',0,0,'pending','2025-04-19T09:30:00-03:00'),  -- LA RESAKA FC vs VICIOS FC
('B',6,'462ea120-150d-49eb-924d-810c787f3eb3','e84e8c42-628c-455f-aaeb-47dbb20da59e',0,0,'pending','2025-04-19T09:30:00-03:00'),  -- FORESTAL vs SUDAKAS FC
('B',6,'531ea5b9-0059-44ba-a173-8cdb0cbec7fc','80fc6f07-879b-4ca8-bb04-96c30ad1ded7',0,0,'pending','2025-04-19T11:00:00-03:00'),  -- MANCHESTER BOYS vs CALLE 10
('B',6,'02eb5b0c-681b-42f0-97f0-9d173b9cfdd5','3808d7eb-008b-4741-babf-56db55773a01',0,0,'pending','2025-04-19T14:00:00-03:00'),  -- SABUESOS vs PROGRESO
('C',6,'6f820750-3765-4d56-a98b-44268105e0b5','4fa81999-12e1-44cf-ac5c-52b664e4a3b5',0,0,'pending','2025-04-19T09:30:00-03:00'),  -- GUEMES SFI vs DEP ENTUSIASMO
('C',6,'3bcdf449-9657-4924-9db2-2d4d6e0afff8','6ed052da-6383-4420-aad1-239ae49d7665',0,0,'pending','2025-04-19T11:00:00-03:00'),  -- ROSARIO vs LOS PUMAS 2.0
('C',6,'eeb63eaa-e3d1-475d-a107-c60733791e56','446df768-eef5-47e5-8f55-1b6cd7cec3a0',0,0,'pending','2025-04-19T12:30:00-03:00'),  -- FALSO FUTBOL vs CASITA NUEVA
('C',6,'209d167f-fe24-4129-a05a-440d69eefcfb','7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc',0,0,'pending','2025-04-19T12:30:00-03:00'),  -- D.C LOS PUMAS vs 420 F.C

-- ===== FECHA 7 (26/04/2025) =====
('A',7,'92d4337f-193b-439e-a2a8-9cc4441432d3','a1c1eaee-9f58-43a7-89df-7a57eac9dc89',0,0,'pending','2025-04-26T09:30:00-03:00'),  -- ALMIRANTE vs TERCER TIEMPO
('A',7,'2d30afd7-256c-4251-baa0-5aeb009a91df','b80c8dd8-e581-4704-9e8e-cc3eaf54cb76',0,0,'pending','2025-04-26T11:00:00-03:00'),  -- SECTOR 32 vs PA LA BIRRA
('A',7,'08cc6591-31d8-4613-9e12-a1a91cf91e5d','1f04eb10-390a-470d-95c1-ae1d6510b93e',0,0,'pending','2025-04-26T14:00:00-03:00'),  -- TORNADO vs JARDIN AMERICA
('A',7,'07478855-e4cd-4b41-974a-7d4b6dd0d05c','2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3',0,0,'pending','2025-04-26T14:00:00-03:00'),  -- INTER vs ATLETICO LUGANO
('B',7,'d381898a-6399-4918-8be6-510c29bb5b93','80fc6f07-879b-4ca8-bb04-96c30ad1ded7',0,0,'pending','2025-04-26T09:30:00-03:00'),  -- LA RESAKA FC vs CALLE 10
('B',7,'e84e8c42-628c-455f-aaeb-47dbb20da59e','02eb5b0c-681b-42f0-97f0-9d173b9cfdd5',0,0,'pending','2025-04-26T09:30:00-03:00'),  -- SUDAKAS FC vs SABUESOS
('B',7,'555a4713-5466-4a93-9326-56278d2a6d09','462ea120-150d-49eb-924d-810c787f3eb3',0,0,'pending','2025-04-26T12:30:00-03:00'),  -- VICIOS FC vs FORESTAL
('B',7,'3808d7eb-008b-4741-babf-56db55773a01','531ea5b9-0059-44ba-a173-8cdb0cbec7fc',0,0,'pending','2025-04-26T14:30:00-03:00'),  -- PROGRESO vs MANCHESTER BOYS
('C',7,'7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc','3bcdf449-9657-4924-9db2-2d4d6e0afff8',0,0,'pending','2025-04-26T09:30:00-03:00'),  -- 420 F.C vs ROSARIO
('C',7,'6f820750-3765-4d56-a98b-44268105e0b5','6ed052da-6383-4420-aad1-239ae49d7665',0,0,'pending','2025-04-26T11:00:00-03:00'),  -- GUEMES SFI vs LOS PUMAS 2.0
('C',7,'4fa81999-12e1-44cf-ac5c-52b664e4a3b5','eeb63eaa-e3d1-475d-a107-c60733791e56',0,0,'pending','2025-04-26T11:00:00-03:00'),  -- DEP ENTUSIASMO vs FALSO FUTBOL
('C',7,'446df768-eef5-47e5-8f55-1b6cd7cec3a0','209d167f-fe24-4129-a05a-440d69eefcfb',0,0,'pending','2025-04-26T12:30:00-03:00'); -- CASITA NUEVA vs D.C LOS PUMAS
