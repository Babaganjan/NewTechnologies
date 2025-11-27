import { TURNSTILES_NT_NT01 } from './data/turnistiles-nt-nt01';
import { TURNSTILES_NT_NT02 } from './data/turnistiles-nt-nt02';
import { TURNSTILES_NT_NT04 } from './data/turnistiles-nt-nt04';
import { TURNSTILES_NT_T01R } from './data/turnistiles-nt-t01r';
import { TURNSTILES_NT_T05 } from './data/turnistiles-nt-t05';

export const SWITCHES = {
  'nt-t01r': TURNSTILES_NT_T01R,
  'nt-t05': TURNSTILES_NT_T05,
  nt01: TURNSTILES_NT_NT01,
  nt02: TURNSTILES_NT_NT02,
  nt04: TURNSTILES_NT_NT04,
} as const;
