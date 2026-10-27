import type { IReplyMail, IReplyOption, IReplyScenario } from './mail.model';

export type SohuraStatKey = 'literal' | 'kind' | 'bold'; // 충실 / 다정 / 대담
export type ISohuraMail = IReplyMail<SohuraStatKey>;
export type ISohuraReply = IReplyOption<SohuraStatKey>;
export type ISohuraScenario = IReplyScenario<SohuraStatKey>;