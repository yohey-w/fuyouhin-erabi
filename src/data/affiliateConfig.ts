export interface AffiliateProgram {
  name: string;
  network: 'A8';
  rewardYen: number;
  status: 'active' | 'pending' | 'url_pending';
  affiliateUrl: string;
}

export interface AffiliatePlacement {
  title: string;
  description: string;
  buttonText: string;
  affiliateUrl: string;
  note: string;
}

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  ihin110: {
    name: '遺品整理110番',
    network: 'A8',
    rewardYen: 6000,
    status: 'active',
    affiliateUrl: 'https://example.com/affiliate/placeholder-fuyouhin-1',
  },
  fireworks: {
    name: 'FireWorks',
    network: 'A8',
    rewardYen: 8000,
    status: 'url_pending',
    affiliateUrl: 'https://example.com/affiliate/placeholder-fuyouhin-2',
  },
  jinsokuKatadukeya: {
    name: '迅速片付け屋',
    network: 'A8',
    rewardYen: 4135,
    status: 'pending',
    affiliateUrl: 'https://example.com/affiliate/placeholder-fuyouhin-3',
  },
} as const satisfies Record<string, AffiliateProgram>;

export const affiliatePlacements = {
  top: {
    title: '不用品回収の無料見積もりをまとめて確認',
    description:
      '遺品整理110番は最短即日対応にも対応。まずは回収量と希望日を入力して、料金目安をチェックできます。',
    buttonText: '遺品整理110番の無料見積もりを確認する →',
    affiliateUrl: affiliatePrograms.ihin110.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '大型回収やまとめ処分を相談したい方へ',
    description:
      'FireWorksは大量回収の相談と相性が良いサービスです。回収条件を整理しながら比較検討できます。',
    buttonText: 'FireWorksの見積もり条件を見る →',
    affiliateUrl: affiliatePrograms.fireworks.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最後に料金条件を再確認して依頼先を決定',
    description:
      '迅速片付け屋は審査中のため、提携後に正式リンクへ差し替え予定です。比較前の候補としてチェックしておきましょう。',
    buttonText: '迅速片付け屋の最新情報を確認する →',
    affiliateUrl: affiliatePrograms.jinsokuKatadukeya.affiliateUrl,
    note: PR_NOTE,
  },
} as const satisfies Record<'top' | 'middle' | 'bottom', AffiliatePlacement>;

