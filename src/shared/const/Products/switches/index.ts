import { SWITCH_NT_PAG_F1R18 } from './data/switches-nt-pag-f1r18';
import { SWITCH_NT_PAG_F1R26 } from './data/switches-nt-pag-f1r26';
import { SWITCH_NT_PG_F2R18 } from './data/switches-nt-pg-f2r18';
import { SWITCH_NT_PG_F2R26 } from './data/switches-nt-pg-f2r26';
import { SWITCH_NT_PG_FR10 } from './data/switches-nt-pg-fr10';
import { SWITCH_NT_PM_R10 } from './data/switches-nt-pm-r10';

export const SWITCHES = {
  'nt-pag-f1r18': SWITCH_NT_PAG_F1R18,
  'nt-pag-f1r26': SWITCH_NT_PAG_F1R26,
  'nt-pg-fr10': SWITCH_NT_PG_FR10,
  'nt-pg-f2r18': SWITCH_NT_PG_F2R18,
  'nt-pg-f2r26': SWITCH_NT_PG_F2R26,
  'nt-pm-r10': SWITCH_NT_PM_R10,
} as const;
