import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://rriextafynbgkzaaoadl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyaWV4dGFmeW5iZ2t6YWFvYWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MTI3NTYsImV4cCI6MjA5MjM4ODc1Nn0.DVr17v3Qb9scpEQGqFQBD_2lxZL3CJNrq58E2MN9pIo'
)

const T = {
  // Zona A
  ATLETICO_LUGANO:  '2f65a4cf-f96f-41fe-b46f-1f45bb7fb2d3',
  INTER:            '07478855-e4cd-4b41-974a-7d4b6dd0d05c',
  SECTOR_32:        '2d30afd7-256c-4251-baa0-5aeb009a91df',
  PA_LA_BIRRA:      'b80c8dd8-e581-4704-9e8e-cc3eaf54cb76',
  TORNADO:          '08cc6591-31d8-4613-9e12-a1a91cf91e5d',
  JARDIN_AMERICA:   '1f04eb10-390a-470d-95c1-ae1d6510b93e',
  ALMIRANTE:        '92d4337f-193b-439e-a2a8-9cc4441432d3',
  TERCER_TIEMPO:    'a1c1eaee-9f58-43a7-89df-7a57eac9dc89',
  // Zona B
  VICIOS_FC:        '555a4713-5466-4a93-9326-56278d2a6d09',
  CALLE_10:         '80fc6f07-879b-4ca8-bb04-96c30ad1ded7',
  SABUESOS:         '02eb5b0c-681b-42f0-97f0-9d173b9cfdd5',
  FORESTAL:         '462ea120-150d-49eb-924d-810c787f3eb3',
  PROGRESO:         '3808d7eb-008b-4741-babf-56db55773a01',
  MANCHESTER_BOYS:  '531ea5b9-0059-44ba-a173-8cdb0cbec7fc',
  SUDAKAS_FC:       'e84e8c42-628c-455f-aaeb-47dbb20da59e',
  LA_RESAKA_FC:     'd381898a-6399-4918-8be6-510c29bb5b93',
  // Zona C
  FALSO_FUTBOL:     'eeb63eaa-e3d1-475d-a107-c60733791e56',
  CASITA_NUEVA:     '446df768-eef5-47e5-8f55-1b6cd7cec3a0',
  ROSARIO:          '3bcdf449-9657-4924-9db2-2d4d6e0afff8',
  DC_LOS_PUMAS:     '209d167f-fe24-4129-a05a-440d69eefcfb',
  F420:             '7a4aa9ba-bc1c-4958-b100-3dac0ca2dcfc',
  GUEMES_SFI:       '6f820750-3765-4d56-a98b-44268105e0b5',
  LOS_PUMAS_20:     '6ed052da-6383-4420-aad1-239ae49d7665',
  DEP_ENTUSIASMO:   '4fa81999-12e1-44cf-ac5c-52b664e4a3b5',
}

const F = 'finished'
const P = 'pending'

function m(zone, round, home, away, hs, as_, status, date = null) {
  return { zone, round, home_team_id: home, away_team_id: away, home_score: hs, away_score: as_, status, match_date: date }
}

const matches = [
  // ===== FECHA 1 =====
  // Zona A
  m('A', 1, T.ALMIRANTE,      T.INTER,           2, 3, F),
  m('A', 1, T.TORNADO,        T.TERCER_TIEMPO,   1, 0, F),
  m('A', 1, T.JARDIN_AMERICA, T.PA_LA_BIRRA,     0, 0, P),  // no jugado
  m('A', 1, T.SECTOR_32,      T.ATLETICO_LUGANO, 0, 0, P),  // no jugado
  // Zona B
  m('B', 1, T.LA_RESAKA_FC,   T.MANCHESTER_BOYS, 0, 2, F),
  m('B', 1, T.SUDAKAS_FC,     T.VICIOS_FC,       0, 7, F),
  m('B', 1, T.CALLE_10,       T.SABUESOS,        0, 0, P),  // no jugado
  m('B', 1, T.PROGRESO,       T.FORESTAL,        0, 0, P),  // no jugado
  // Zona C
  m('C', 1, T.LOS_PUMAS_20,   T.DC_LOS_PUMAS,    1, 2, F),
  m('C', 1, T.CASITA_NUEVA,   T.DEP_ENTUSIASMO,  3, 0, F),
  m('C', 1, T.GUEMES_SFI,     T.ROSARIO,         1, 3, F),
  m('C', 1, T.F420,           T.FALSO_FUTBOL,    1, 5, F),

  // ===== FECHA 2 =====
  // Zona A
  m('A', 2, T.TORNADO,        T.PA_LA_BIRRA,     2, 1, F),
  m('A', 2, T.ALMIRANTE,      T.SECTOR_32,       0, 0, P),  // no jugado
  m('A', 2, T.TERCER_TIEMPO,  T.INTER,           2, 5, F),
  m('A', 2, T.JARDIN_AMERICA, T.ATLETICO_LUGANO, 0, 4, F),
  // Zona B
  m('B', 2, T.LA_RESAKA_FC,   T.SABUESOS,        0, 2, F),
  m('B', 2, T.PROGRESO,       T.SUDAKAS_FC,      3, 0, F),
  m('B', 2, T.MANCHESTER_BOYS,T.FORESTAL,        0, 1, F),
  m('B', 2, T.CALLE_10,       T.VICIOS_FC,       1, 0, F),
  // Zona C
  m('C', 2, T.ROSARIO,        T.FALSO_FUTBOL,    0, 8, F),
  m('C', 2, T.GUEMES_SFI,     T.DC_LOS_PUMAS,    3, 1, F),
  m('C', 2, T.LOS_PUMAS_20,   T.DEP_ENTUSIASMO,  2, 2, F),
  m('C', 2, T.F420,           T.CASITA_NUEVA,    0, 1, F),

  // ===== FECHA 3 =====
  // Zona A
  m('A', 3, T.PA_LA_BIRRA,    T.ATLETICO_LUGANO, 2, 6, F),
  m('A', 3, T.JARDIN_AMERICA, T.ALMIRANTE,       1, 1, F),
  m('A', 3, T.TORNADO,        T.INTER,           1, 4, F),
  m('A', 3, T.TERCER_TIEMPO,  T.SECTOR_32,       0, 3, F),
  // Zona B
  m('B', 3, T.LA_RESAKA_FC,   T.FORESTAL,        0, 2, F),
  m('B', 3, T.CALLE_10,       T.PROGRESO,        3, 0, F),
  m('B', 3, T.MANCHESTER_BOYS,T.SUDAKAS_FC,      1, 0, F),
  m('B', 3, T.SABUESOS,       T.VICIOS_FC,       3, 4, F),
  // Zona C
  m('C', 3, T.LOS_PUMAS_20,   T.F420,            1, 3, F),
  m('C', 3, T.DC_LOS_PUMAS,   T.DEP_ENTUSIASMO,  1, 0, F),
  m('C', 3, T.GUEMES_SFI,     T.FALSO_FUTBOL,    1, 7, F),
  m('C', 3, T.ROSARIO,        T.CASITA_NUEVA,    0, 6, F),

  // ===== FECHA 4 =====
  // Zona A
  m('A', 4, T.ATLETICO_LUGANO,T.ALMIRANTE,       7, 0, F),
  m('A', 4, T.INTER,          T.JARDIN_AMERICA,  6, 1, F),
  m('A', 4, T.TORNADO,        T.SECTOR_32,       1, 2, F),
  m('A', 4, T.PA_LA_BIRRA,    T.TERCER_TIEMPO,   0, 0, P),  // no jugado
  // Zona B
  m('B', 4, T.LA_RESAKA_FC,   T.SUDAKAS_FC,      0, 0, P),  // no jugado
  m('B', 4, T.VICIOS_FC,      T.PROGRESO,        0, 0, P),  // no jugado
  m('B', 4, T.FORESTAL,       T.CALLE_10,        0, 6, F),
  m('B', 4, T.SABUESOS,       T.MANCHESTER_BOYS, 3, 0, F),
  // Zona C
  m('C', 4, T.GUEMES_SFI,     T.CASITA_NUEVA,    1, 3, F),
  m('C', 4, T.DEP_ENTUSIASMO, T.F420,            1, 1, F),
  m('C', 4, T.FALSO_FUTBOL,   T.LOS_PUMAS_20,    6, 2, F),
  m('C', 4, T.DC_LOS_PUMAS,   T.ROSARIO,         0, 0, P),  // no jugado

  // ===== FECHA 5 =====
  // Zona A
  m('A', 5, T.TORNADO,        T.ALMIRANTE,       1, 2, F),
  m('A', 5, T.ATLETICO_LUGANO,T.TERCER_TIEMPO,   0, 1, F),
  m('A', 5, T.INTER,          T.PA_LA_BIRRA,     0, 0, P),  // no jugado
  m('A', 5, T.SECTOR_32,      T.JARDIN_AMERICA,  0, 0, P),  // no jugado
  // Zona B
  m('B', 5, T.LA_RESAKA_FC,   T.PROGRESO,        0, 2, F),
  m('B', 5, T.SUDAKAS_FC,     T.CALLE_10,        0, 4, F),
  m('B', 5, T.VICIOS_FC,      T.MANCHESTER_BOYS, 5, 2, F),
  m('B', 5, T.FORESTAL,       T.SABUESOS,        0, 0, P),  // no jugado
  // Zona C
  m('C', 5, T.GUEMES_SFI,     T.F420,            0, 0, P),  // no jugado
  m('C', 5, T.CASITA_NUEVA,   T.LOS_PUMAS_20,    5, 1, F),
  m('C', 5, T.DEP_ENTUSIASMO, T.ROSARIO,         2, 1, F),
  m('C', 5, T.FALSO_FUTBOL,   T.DC_LOS_PUMAS,    6, 0, F),

  // ===== FECHA 6 (19/04/2025) =====
  m('A', 6, T.PA_LA_BIRRA,    T.ALMIRANTE,       0, 0, P, '2025-04-19T09:30:00-03:00'),
  m('A', 6, T.INTER,          T.SECTOR_32,       0, 0, P, '2025-04-19T11:00:00-03:00'),
  m('A', 6, T.TERCER_TIEMPO,  T.JARDIN_AMERICA,  0, 0, P, '2025-04-19T12:30:00-03:00'),
  m('A', 6, T.TORNADO,        T.ATLETICO_LUGANO, 0, 0, P, '2025-04-19T14:00:00-03:00'),
  m('B', 6, T.LA_RESAKA_FC,   T.VICIOS_FC,       0, 0, P, '2025-04-19T09:30:00-03:00'),
  m('B', 6, T.FORESTAL,       T.SUDAKAS_FC,      0, 0, P, '2025-04-19T09:30:00-03:00'),
  m('B', 6, T.MANCHESTER_BOYS,T.CALLE_10,        0, 0, P, '2025-04-19T11:00:00-03:00'),
  m('B', 6, T.SABUESOS,       T.PROGRESO,        0, 0, P, '2025-04-19T14:00:00-03:00'),
  m('C', 6, T.GUEMES_SFI,     T.DEP_ENTUSIASMO,  0, 0, P, '2025-04-19T09:30:00-03:00'),
  m('C', 6, T.ROSARIO,        T.LOS_PUMAS_20,    0, 0, P, '2025-04-19T11:00:00-03:00'),
  m('C', 6, T.FALSO_FUTBOL,   T.CASITA_NUEVA,    0, 0, P, '2025-04-19T12:30:00-03:00'),
  m('C', 6, T.DC_LOS_PUMAS,   T.F420,            0, 0, P, '2025-04-19T12:30:00-03:00'),

  // ===== FECHA 7 (26/04/2025) =====
  m('A', 7, T.ALMIRANTE,      T.TERCER_TIEMPO,   0, 0, P, '2025-04-26T09:30:00-03:00'),
  m('A', 7, T.SECTOR_32,      T.PA_LA_BIRRA,     0, 0, P, '2025-04-26T11:00:00-03:00'),
  m('A', 7, T.TORNADO,        T.JARDIN_AMERICA,  0, 0, P, '2025-04-26T14:00:00-03:00'),
  m('A', 7, T.INTER,          T.ATLETICO_LUGANO, 0, 0, P, '2025-04-26T14:00:00-03:00'),
  m('B', 7, T.LA_RESAKA_FC,   T.CALLE_10,        0, 0, P, '2025-04-26T09:30:00-03:00'),
  m('B', 7, T.SUDAKAS_FC,     T.SABUESOS,        0, 0, P, '2025-04-26T09:30:00-03:00'),
  m('B', 7, T.VICIOS_FC,      T.FORESTAL,        0, 0, P, '2025-04-26T12:30:00-03:00'),
  m('B', 7, T.PROGRESO,       T.MANCHESTER_BOYS, 0, 0, P, '2025-04-26T14:30:00-03:00'),
  m('C', 7, T.F420,           T.ROSARIO,         0, 0, P, '2025-04-26T09:30:00-03:00'),
  m('C', 7, T.GUEMES_SFI,     T.LOS_PUMAS_20,    0, 0, P, '2025-04-26T11:00:00-03:00'),
  m('C', 7, T.DEP_ENTUSIASMO, T.FALSO_FUTBOL,    0, 0, P, '2025-04-26T11:00:00-03:00'),
  m('C', 7, T.CASITA_NUEVA,   T.DC_LOS_PUMAS,    0, 0, P, '2025-04-26T12:30:00-03:00'),
]

const { error } = await supabase.from('matches').insert(matches)
if (error) {
  console.error('ERROR:', error.message)
  process.exit(1)
}
console.log(`✓ ${matches.length} partidos insertados`)
